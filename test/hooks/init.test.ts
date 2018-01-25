import {expect, test} from '@dxcli/dev-test'

describe('hooks', () => {
  test()
  .stdout()
  .hook('init', {id: 'mycommand'})
  .run(output => expect(output.stdout).to.contain('example hook running mycommand'))
  .end('shows a message')
})
