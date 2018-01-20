import {describe, expect, testCommand} from '@dxcli/dev-test'

describe('command', () => {
  testCommand(['hello'], {stdout: true}, ({stdout}) => {
    expect(stdout).to.equal('hello world!\n')
  })
  testCommand(['hello', '--name', 'jeff'], {stdout: true}, ({stdout}) => {
    expect(stdout).to.equal('hello jeff!\n')
  })
})
