PRECISION
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Effective number of bits in the [significand][significand] of a [single-precision floating-point number][ieee754].


## Installation

``` bash
$ npm install const-precision-float32
```


## Usage

``` javascript
var FLOAT32_PRECISION = require( 'const-precision-float32' );
```

#### FLOAT32_PRECISION

Effective number of bits in the [significand][significand] of a [single-precision floating-point number][ieee754].

``` javascript
FLOAT32_PRECISION === 24; // including implicit bit
```


## Examples

``` javascript
var FLOAT32_PRECISION = require( 'const-precision-float32' );

console.log( FLOAT32_PRECISION );
// returns 24
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/const-precision-float32.svg
[npm-url]: https://npmjs.org/package/const-precision-float32

[build-image]: http://img.shields.io/travis/const-io/precision-float32/master.svg
[build-url]: https://travis-ci.org/const-io/precision-float32

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/precision-float32/master.svg
[coverage-url]: https://codecov.io/github/const-io/precision-float32?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/precision-float32.svg
[dependencies-url]: https://david-dm.org/const-io/precision-float32

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/precision-float32.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/precision-float32

[github-issues-image]: http://img.shields.io/github/issues/const-io/precision-float32.svg
[github-issues-url]: https://github.com/const-io/precision-float32/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985
[significand]: https://en.wikipedia.org/wiki/Significand
[compute-io]: https://github.com/compute-io
