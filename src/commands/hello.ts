import {Command, flags} from '@dxcli/command'
import cli from 'cli-ux'

export default class Hello extends Command {
  static flags: flags.Input<Hello['flags']> = {
    name: flags.string({char: 'n', description: 'name to print'})
  }
  flags: {
    name?: string
  }

  async run() {
    const name = this.flags.name || 'world'
    cli.log(`hello ${name} from hello!`)
  }
}
