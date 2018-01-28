const {Command, flags} = require('@dxcli/command')
const {cli} = require('cli-ux')

class HelloCommand extends Command {
  async run() {
    const name = this.flags.name || 'world'
    cli.log(`hello ${name} from hello!`)
  }
}

HelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HelloCommand
