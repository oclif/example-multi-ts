import {expect, test} from '@oclif/test'

describe('goodbye', () => {
  test
    .stdout()
    .command(['goodbye'])
    .test('runs hello', ctx => {
      expect(ctx.stdout).toBe('hello world')
    })

  test
    .stdout()
    .command(['goodbye', '--name', 'jeff'])
    .test('runs hello --name jeff', ctx => {
      expect(ctx.stdout).toBe('hello jeff')
    })
})
