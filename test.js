/* global QUnit (thanks shindakun on yt) */
const colorConversionThing = require('./jenns-color-conversion-library.js')

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
// also todo: assert throws for above tests
// todo: assert throws on all the things!

QUnit.test( 'colorname to hex', function( assert ) {
  const converted = colorConversionThing.colornameToHex( 'DarkSlateBlue' )
  try {
    assert.propEqual( converted.toUpperCase(), '#483D8B' )
  } catch(err) {
    console.log(err)
  }
})

QUnit.test( 'colorname to hex - invalid colorname', function( assert ) {
  // assert that typeof converted is object of error thrown
  assert.throws( function() { 
    colorConversionThing.colornameToHex( 'CatsTheMusical' ) // shouts out to alexandre freire on yt
  } )
})

QUnit.test( 'colorname to rgb', function( assert ) {
  const converted = colorConversionThing.colornameToRGB( 'PaPaYaWhIp' )
  assert.propEqual( converted, { r: 255, g: 239, b: 213 } )
})

QUnit.test( 'colorname to rgb - invalid colorname', function( assert ) {
  assert.throws( function() {
    colorConversionThing.colornameToRGB( '🎶' )
  })
})

QUnit.test( 'hex to colorname', function( assert ) {
  const converted = colorConversionThing.hexToColorname( '#FF69B4' )
  assert.equal( converted.toUpperCase(), 'HOTPINK')
})

// TODO write test for 'hex to colorname - invalid hex'

/*
TODO - this test and also throw error test
QUnit.test( 'rgb to colorname', function( assert ) {
  const converted = colorConversionThing.rgbToColorname( { r: 255, g: 239, b: 213 } )
  assert.ok( converted == 'papayawhip' )
})

*/