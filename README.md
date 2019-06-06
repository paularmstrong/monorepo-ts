# TS Monorepo

This is a git repo template for setting up your own project as a Monorepo using Typescript, Yarn, Lerna, and Jest.

## Getting started

Click [Use this template](https://github.com/paularmstrong/monorepo-ts/generate) to initialize a new repository on Github.

## Pre-configured

- Typescript
- Lerna
- Jest
- Eslint
- Git hooks
  - post-checkout: on branch change, attempts to install third-party modules
  - post-merge: attempts to install third-party modules
  - post-rebase: attempts to install third-party modules
  - pre-commit: runs Typescript, and lint-staged
    - lints changed files
    - runs related tests for changed file

## Commands

### `build`

Builds all packages in parallel

### `clean`

Cleans up all build files for all packages

### `ci`

Shortcut command to run CI-friendly conformance checks for `lint`, `typescript` checks, and `test`s.

### `lint`

Runs lint and auto-fixes code if necessary.

### `test`

Runs all tests.

Shortcut for `jest`. You can pass any `jest` CLI flags to this command like `--watch`

### `tsc`

Runs a `noEmit` Typescript check across all files.
