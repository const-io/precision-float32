'use strict';

// MODULES //

var tape = require( 'tape' );
var PRECISION = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof PRECISION, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is 24', function test( t ) {
	t.equal( PRECISION, 24, 'equals 24' );
	t.end();
});
