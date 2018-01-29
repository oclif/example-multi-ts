/* eslint-disable unicorn/filename-case */

const {
  setColors,
  concurrent,
  crossEnv,
  mkdirp,
  series,
} = require('nps-utils')

setColors(['dim'])

const script = (script, description) => description ? {script, description} : {script}

const linters = {
  eslint: script('eslint .', 'lint js files'),
  commitlint: script('commitlint --from origin/master', 'ensure that commits are in valid conventional-changelog format'),
}

let mocha = 'mocha --forbid-only "test/**/*.test.js"'
if (process.env.CI) {
  if (process.env.CIRCLECI) {
    // add mocha junit reporter
    mocha = crossEnv(`MOCHA_FILE=reports/mocha.xml ${mocha} --reporter mocha-junit-reporter`)
    // add eslint reporter
    linters.eslint.script = `${linters.eslint.script} --format junit --output-file reports/eslint.xml`
  }
  // add code coverage reporting with nyc
  const nyc = 'nyc --nycrc-path node_modules/@dxcli/nyc-config/.nycrc'
  const nycReport = `${nyc} report --reporter text-lcov > coverage.lcov`
  mocha = series(`${nyc} ${mocha}`, nycReport)
}

let test = concurrent({
  ...linters,
  test: series(mocha),
})

if (process.env.CI) test = series(mkdirp('reports'), test)

module.exports = {
  scripts: {
    ...linters,
    lint: concurrent(linters),
    test,
    mocha,
    release: 'dxcli-semantic-release -e @dxcli/semantic-release',
  },
}
