# Test

[![Latest Version](https://img.shields.io/npm/v/Test.svg)](https://www.npmjs.com/package/Test)
[![Build Status](https://img.shields.io/travis/Test/Test.svg)](https://travis-ci.org/Test/Test)
[![David](https://img.shields.io/david/Test/Test.svg)](https://david-dm.org/Test/Test)
[![David](https://img.shields.io/david/dev/Test/Test.svg)](https://david-dm.org/Test/Test#info=devDependencies)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/Test/Test)

Test.

## Installation

Install via npm:

```bash
npm install --save Test
```

Install via bower:

```bash
bower install --save Test
```

## Submitting Issues

If have issues while using this module, please consider discussing it on [Gitter channel](https://gitter.im/Test/Test) first.

If you confirm the issue is indeed a bug, you can browse the [issues page](https://github.com/Test/Test/issues) for existing issues describing the same problem.

If you found nothing on issues page, please create an new issue with detailed debug information, for example, reproduce procedure, error stacks, screenshots etc. Issues without enough debug information will probably be closed.

## Development

Clone repository from github:

```bash
git clone https://github.com/Test/Test.git
```

Install npm dependencies:

```bash
npm install
```

Run default gulp task to build project, which will compile source files, run test and watch file changes for you:

```bash
gulp
```

Now, you are ready to go.

## Publish

If you want to publish new version to npm and bower, please make sure all tests have passed before you publish new version, and you need do these preparations:

* Add new release information in `CHANGELOG.md`. The format of markdown contents will matter, because build scripts will get version and release content from this file by regular expression. You can follow the format of the older release information.

* Run `gulp` default task, which will get version number from `CHANGELOG.md` and bump it into `package.json` and `bower.json`, before you push the commit for new version.

* Put your [personal API tokens](https://github.com/blog/1509-personal-api-tokens) in `/.token.json`, which is required by build scripts to request [Github API](https://developer.github.com/v3/):

```json
{
  "github": "[your github personal access token]"
}
```

Now you can run `gulp publish` task, which will do these work for you:

* Generate the static doc site and push it to `gh-pages` branch.
* Get release information from `CHANGELOG.md` and request Github API to create new release.

If everything goes fine, you can publish new version to npm at the end:

```bash
npm publish
```
