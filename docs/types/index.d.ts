/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Rounds a single-precision floating-point number toward zero.
*
* @param x - input value
* @returns rounded value
*
* @example
* var v = truncf( -4.2 );
* // returns -4.0
*
* @example
* var v = truncf( 9.99999 );
* // returns 9.0
*
* @example
* var v = truncf( 0.0 );
* // returns 0.0
*
* @example
* var v = truncf( -0.0 );
* // returns -0.0
*
* @example
* var v = truncf( NaN );
* // returns NaN
*
* @example
* var v = truncf( Infinity );
* // returns Infinity
*
* @example
* var v = truncf( -Infinity );
* // returns -Infinity
*/
declare function truncf( x: number ): number;


// EXPORTS //

export = truncf;
