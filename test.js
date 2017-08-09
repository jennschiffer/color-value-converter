/* global QUnit (thanks shindakun on yt) */
const colorConversionThing = require('./code.js')

/* QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" )
})*/

QUnit.test( 'rgb to hex', function( assert ) {
  const converted = colorConversionThing.rgbToHex( { r: 255, g: 255, b: 255 } )
  try {
    assert.equal( converted.toUpperCase(), '#FFFFFF' )      
  } catch(err) {
    console.log(err)
  }
})

QUnit.test( 'rgb to hex - single digits', function( assert ) {
  const converted = colorConversionThing.rgbToHex( { r: 1, g: 1, b: 45 } )
  try {
    assert.equal( converted.toUpperCase(), '#01012D' )
  } catch(err) {
    console.log(err)
  }
})

QUnit.test( 'rgb to hex - values that are 0', function( assert ) {
  const converted = colorConversionThing.rgbToHex( { r: 0, g: 0, b: 0 } )
  try {
    assert.equal( converted.toUpperCase(), '#000000' )
  } catch(err) {
    console.log(err)
  }
})

QUnit.test( 'hex to rgb', function( assert ) {
  const converted = colorConversionThing.hexToRGB( '#FFFFFF' )
  try {
    assert.propEqual( converted, { r: 255, g: 255, b: 255 } ) // thanks to 4682b4 on yt
  } catch(err) {
    console.log(err)
  }
})

// todo: test single digit hex values (eg. #fff)




// todo: try/catch on below tests

QUnit.test( 'colorname to rgb', function( assert ) {
  const converted = colorConversionThing.colornameToRGB( 'papayawhip' )
  assert.propEqual( converted, { r: 255, g: 239, b: 213 } )
})

QUnit.test( 'rgb to colorname', function( assert ) {
  const converted = colorConversionThing.rgbToColorname( { r: 255, g: 239, b: 213 } )
  assert.ok( converted == 'papayawhip' )
})