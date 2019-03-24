import {expect, test} from '@oclif/test'

describe('hello', () => {
  test
    .stdout()
    .command(['hello'])
    .test('runs hello', ctx => {
      expect(ctx.stdout).toBe('hello world')
    })

  test
    .stdout()
    .command(['hello', '--name', 'jeff'])
    .test('runs hello --name jeff', ctx => {
      expect(ctx.stdout).toBe('hello jeff')
    })
})
