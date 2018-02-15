@oclif/example-multi-ts
=======================

example multi-command CLI built with typescript

[![Version](https://img.shields.io/npm/v/@oclif/example-multi-ts.svg)](https://npmjs.org/package/@oclif/example-multi-ts)
[![CircleCI](https://circleci.com/gh/oclif/example-multi-ts/tree/master.svg?style=shield)](https://circleci.com/gh/oclif/example-multi-ts/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/oclif/example-multi-ts?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/example-multi-ts/branch/master)
[![Codecov](https://codecov.io/gh/oclif/example-multi-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/oclif/example-multi-ts)
[![Greenkeeper](https://badges.greenkeeper.io/oclif/example-multi-ts.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/oclif/example-multi-ts/badge.svg)](https://snyk.io/test/github/oclif/example-multi-ts)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/example-multi-ts.svg)](https://npmjs.org/package/@oclif/example-multi-ts)
[![License](https://img.shields.io/npm/l/@oclif/example-multi-ts.svg)](https://github.com/oclif/example-multi-ts/blob/master/package.json)

<!-- toc -->
* [Install](#install)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
<!-- install -->
# Install

with yarn:
```
$ yarn global add @oclif/example-multi-ts
```

or with npm:
```
$ npm install -g @oclif/example-multi-ts
```
<!-- installstop -->
<!-- usage -->
# Usage

```sh-session
$ example-multi-ts COMMAND
running command...
$ example-multi-ts (-v|--version|version)
@oclif/example-multi-ts/1.3.1 (linux-x64) node-v9.5.0
$ example-multi-ts --help [COMMAND]
USAGE
  $ example-multi-ts COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
# Commands

* [example-multi-ts hello [FILE]](#hello)
* [example-multi-ts help [COMMAND]](#help)
## hello [FILE]

describe the command here

```
USAGE
  $ example-multi-ts hello [FILE]

OPTIONS
  -f, --force
  -n, --name=name  name to print

EXAMPLES
  $ example-multi-ts hello
  hello world from ./src/hello.ts!

  $ example-multi-ts hello --name myname
  hello myname from .src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/oclif/example-multi-ts/blob/v1.3.1/src/commands/hello.ts)_

## help [COMMAND]

display help for example-multi-ts

```
USAGE
  $ example-multi-ts help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.0.3/src/commands/help.ts)_
<!-- commandsstop -->
