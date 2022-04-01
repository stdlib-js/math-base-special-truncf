<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Truncate

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a single-precision floating-point number toward zero.



<section class="usage">

## Usage

```javascript
import truncf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-truncf@esm/index.mjs';
```

#### truncf( x )

Rounds a single-precision floating-point number toward zero.

```javascript
var v = truncf( -4.2 );
// returns -4.0

v = truncf( 9.99999 );
// returns 9.0

v = truncf( 0.0 );
// returns 0.0

v = truncf( -0.0 );
// returns -0.0

v = truncf( NaN );
// returns NaN

v = truncf( Infinity );
// returns Infinity

v = truncf( -Infinity );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import truncf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-truncf@esm/index.mjs';

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    console.log( 'trunc(%d) = %d', x, truncf( x ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ceilf`][@stdlib/math/base/special/ceilf]</span><span class="delimiter">: </span><span class="description">round a single-precision floating-point number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floorf`][@stdlib/math/base/special/floorf]</span><span class="delimiter">: </span><span class="description">round a single-precision floating-point numeric value toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/trunc`][@stdlib/math/base/special/trunc]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-truncf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-truncf

[test-image]: https://github.com/stdlib-js/math-base-special-truncf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-truncf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-truncf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-truncf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-truncf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-truncf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-truncf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-truncf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-truncf/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-truncf/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/ceilf]: https://github.com/stdlib-js/math-base-special-ceilf/tree/esm

[@stdlib/math/base/special/floorf]: https://github.com/stdlib-js/math-base-special-floorf/tree/esm

[@stdlib/math/base/special/trunc]: https://github.com/stdlib-js/math-base-special-trunc/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
