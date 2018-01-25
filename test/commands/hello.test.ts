import {expect, test} from '@dxcli/dev-test'

describe('command', () => {
  test()
  .stdout()
  .command(['hello'])
  .end('says hello', output => {
    expect(output.stdout).to.contain('hello world!')
  })

  test()
  .stdout()
  .command(['hello', '--name', 'jeff'])
  .end('says hello jeff', output => {
    expect(output.stdout).to.contain('hello jeff!')
  })
})
