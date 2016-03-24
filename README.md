<<<<<<< HEAD
# Test

[![Latest Version](https://img.shields.io/npm/v/Test.svg)](https://www.npmjs.com/package/Test)
[![Build Status](https://img.shields.io/travis/tingpan/test_module_npm.svg?)](https://travis-ci.org/tingpan/test_module_npm)
[![Coveralls](https://img.shields.io/coveralls/tingpan/test_module_npm.svg)](https://coveralls.io/github//tingpan/test_module_npm)
[![Code Climate](https://img.shields.io/codeclimate/github/tingpan/test_module_npm.svg)](https://codeclimate.com/github/tingpan/test_module_npm)
[![David](https://img.shields.io/david/Test/Test.svg)](https://david-dm.org/Test/Test)
[![David](https://img.shields.io/david/dev/Test/Test.svg)](https://david-dm.org/Test/Test#info=devDependencies)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/Test/Test)

Test.
=======
# Testmodulenpm

[![Latest Version](https://img.shields.io/npm/v/test_module_npm.svg)](https://www.npmjs.com/package/test_module_npm)
[![Build Status](https://img.shields.io/travis/tingpan/test_module_npm.svg)](https://travis-ci.org/tingpan/test_module_npm)
[![Coveralls](https://img.shields.io/coveralls/tingpan/test_module_npm.svg)](https://coveralls.io/github/tingpan/test_module_npm)
[![Code Climate](https://img.shields.io/codeclimate/github/tingpan/test_module_npm.svg)](https://codeclimate.com/github/tingpan/test_module_npm)
[![David](https://img.shields.io/david/tingpan/test_module_npm.svg)](https://david-dm.org/tingpan/test_module_npm)
[![David](https://img.shields.io/david/dev/tingpan/test_module_npm.svg)](https://david-dm.org/tingpan/test_module_npm#info=devDependencies)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/tingpan/test_module_npm)

test.
>>>>>>> 5d011c62b029e376b2589bbb814a78aa79c31a86

## Installation

Install via npm:

```bash
<<<<<<< HEAD
npm install --save Test
=======
npm install --save test_module_npm
>>>>>>> 5d011c62b029e376b2589bbb814a78aa79c31a86
```

Install via bower:

```bash
<<<<<<< HEAD
bower install --save Test
=======
bower install --save test_module_npm
>>>>>>> 5d011c62b029e376b2589bbb814a78aa79c31a86
```

## Submitting Issues

<<<<<<< HEAD
If have issues while using this module, please consider discussing it on [Gitter channel](https://gitter.im/Test/Test) first.

If you confirm the issue is indeed a bug, you can browse the [issues page](https://github.com/Test/Test/issues) for existing issues describing the same problem.
=======
If have issues while using this module, please consider discussing it on [Gitter channel](https://gitter.im/tingpan/test_module_npm) first.

If you confirm the issue is indeed a bug, you can browse the [issues page](https://github.com/tingpan/test_module_npm/issues) for existing issues describing the same problem.
>>>>>>> 5d011c62b029e376b2589bbb814a78aa79c31a86

If you found nothing on issues page, please create an new issue with detailed debug information, for example, reproduce procedure, error stacks, screenshots etc. Issues without enough debug information will probably be closed.

## Development

Clone repository from github:

```bash
<<<<<<< HEAD
git clone https://github.com/Test/Test.git
=======
git clone https://github.com/tingpan/test_module_npm.git
>>>>>>> 5d011c62b029e376b2589bbb814a78aa79c31a86
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
