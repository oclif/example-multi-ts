const {expect, test} = require('@dxcli/test')

const command = 'hello'

describe(command, () => {
  test
    .stdout()
    .command([command])
    .do(ctx => expect(ctx.stdout).to.equal('hello world from hello!\n'))
    .it()

  test
    .stdout()
    .command([command, '--name', 'jeff'])
    .do(ctx => expect(ctx.stdout).to.equal('hello jeff from hello!\n'))
    .it()
})
