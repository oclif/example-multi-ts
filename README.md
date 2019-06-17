@oclif/example-multi-ts
=======================

example multi-command CLI built with typescript

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@oclif/example-multi-ts.svg)](https://npmjs.org/package/@oclif/example-multi-ts)
[![CircleCI](https://circleci.com/gh/oclif/example-multi-ts/tree/master.svg?style=shield)](https://circleci.com/gh/oclif/example-multi-ts/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/oclif/example-multi-ts?branch=master&svg=true)](https://ci.appveyor.com/project/oclif/example-multi-ts/branch/master)
[![Codecov](https://codecov.io/gh/oclif/example-multi-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/oclif/example-multi-ts)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/example-multi-ts.svg)](https://npmjs.org/package/@oclif/example-multi-ts)
[![License](https://img.shields.io/npm/l/@oclif/example-multi-ts.svg)](https://github.com/oclif/example-multi-ts/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/example-multi-ts
$ example-multi-ts COMMAND
running command...
$ example-multi-ts (-v|--version|version)
@oclif/example-multi-ts/1.10.7 linux-x64 node-v12.4.0
$ example-multi-ts --help [COMMAND]
USAGE
  $ example-multi-ts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`example-multi-ts goodbye [FILE]`](#example-multi-ts-goodbye-file)
* [`example-multi-ts hello [FILE]`](#example-multi-ts-hello-file)
* [`example-multi-ts help [COMMAND]`](#example-multi-ts-help-command)

## `example-multi-ts goodbye [FILE]`

describe the command here

```
USAGE
  $ example-multi-ts goodbye [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/goodbye.ts](https://github.com/oclif/example-multi-ts/blob/v1.10.7/src/commands/goodbye.ts)_

## `example-multi-ts hello [FILE]`

describe the command here

```
USAGE
  $ example-multi-ts hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ example-multi-ts hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/oclif/example-multi-ts/blob/v1.10.7/src/commands/hello.ts)_

## `example-multi-ts help [COMMAND]`

display help for example-multi-ts

```
USAGE
  $ example-multi-ts help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
