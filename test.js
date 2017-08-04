/* global QUnit (thanks shindakun on yt) */
const colorConversionThing = require('./code.js')

/* QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" )
})*/

QUnit.test( 'rgb to hex', function( assert ) {
  const converted = colorConversionThing.rgbToHex( { r: 255, g: 255, b: 255 } )
  assert.equal( converted.toUpperCase(), '#FFFFFF' )      
})

// TODO - test r g b props with single digit values to hex ^^^

QUnit.test( 'hex to rgb', function( assert ) {
  const converted = colorConversionThing.hexToRGB( '#FFFFFF' )
  assert.propEqual( converted, { r: 255, g: 255, b: 255 } ) // thanks to 4682b4 on yt
})

QUnit.test( 'colorname to rgb', function( assert ) {
  const converted = colorConversionThing.colornameToRGB( 'papayawhip' )
  assert.propEqual( converted, { r: 255, g: 239, b: 213 } )
})

QUnit.test( 'rgb to colorname', function( assert ) {
  const converted = colorConversionThing.rgbToColorname( { r: 255, g: 239, b: 213 } )
  assert.ok( converted == 'papayawhip' )
})