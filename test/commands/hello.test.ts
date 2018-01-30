import {expect, test} from '@dxcli/test'

const command = 'hello'

describe(command, () => {
  test
  .stdout()
  .command([command])
  .do(ctx => expect(ctx.stdout).to.contain('hello world from hello!'))
  .it()

  test
  .stdout()
  .command([command, '--name', 'jeff'])
  .do(ctx => expect(ctx.stdout).to.contain('hello jeff from hello!'))
  .it()
})
