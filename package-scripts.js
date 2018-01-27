const {
  concurrent,
  crossEnv,
  mkdirp,
  series,
  setColors,
} = require('nps-utils')

setColors(['dim'])

const script = (script, description) => description ? {script, description} : {script}

const lint = {
  eslint: script('eslint .', 'lint js files'),
  commitlint: script('commitlint --from origin/master', 'ensure that commits are in valid conventional-changelog format'),
  tsc: script('tsc -p test --noEmit', 'syntax check with tsc'),
  tslint: script('tslint -p test', 'lint ts files'),
}

const linters = Object.keys(lint).map(l => `lint.${l}`)
lint.default = concurrent.nps(...linters)

const test = {
  default: script(concurrent.nps(...linters, 'test.mocha'), 'lint and run all tests'),
  mocha: script('mocha --forbid-only "test/**/*.test.ts"', 'run all mocha tests'),
}

const scripts = {
  lint,
  test,
}

if (process.env.CI) {
  if (process.env.CIRCLECI) {
    test.default.script = series(mkdirp('reports'), test.default.script)
    // add mocha junit reporter
    test.mocha.script = crossEnv(`MOCHA_FILE=reports/mocha.xml ${test.mocha.script} --reporter mocha-junit-reporter`)
    // add eslint reporter
    lint.eslint.script = `${lint.eslint.script} --format junit --output-file reports/eslint.xml`
    // add tslint reporter
    lint.tslint.script = `${lint.tslint.script} --format junit > reports/tslint.xml`
    scripts.release = 'semantic-release -e @dxcli/dev-semantic-release'
  }
  // add code coverage reporting with nyc
  const nyc = 'nyc --nycrc-path node_modules/@dxcli/dev-nyc-config/.nycrc'
  const nycReport = `${nyc} report --reporter text-lcov > coverage.lcov`
  test.mocha.script = series(`${nyc} ${test.mocha.script}`, nycReport)
}

module.exports = {scripts}
