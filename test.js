/* global QUnit (thanks shindakun on yt) */
const colorConversionThing = require('./jenns-color-conversion-library.js')

// RGB TO HEX TESTS ////////////////////////////

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

QUnit.test( 'rgb to hex - invalid (negative) integer values', function( assert ) {
  assert.throws( function() { 
    colorConversionThing.rgbToHex( { r: -100, g: 0, b: 0 } ) 
  } )
})

QUnit.test( 'rgb to hex - invalid (too high) integer values', function( assert ) {
  assert.throws( function() { 
    colorConversionThing.rgbToHex( { r: 500, g: 0, b: 0 } ) 
  } )
})

QUnit.test( 'rgb to hex - invalid (string) values', function( assert ) {
  assert.throws( function() { 
    colorConversionThing.rgbToHex( { r: 'wow invalid!', g: 0, b: 0 } ) 
  } )
})

QUnit.test( 'rgb to hex - invalid (non-object)', function( assert ) {
  assert.throws( function() { 
    colorConversionThing.rgbToHex( 'not an object! watch out!' ) 
  } )
})

// HEX TO RGB TESTS ////////////////////////////

QUnit.test( 'hex to rgb', function( assert ) {
  const converted = colorConversionThing.hexToRGB( '#FFFFFF' )
  try {
    assert.propEqual( converted, { r: 255, g: 255, b: 255 } ) // thanks to 4682b4 on yt
  } catch(err) {
    console.log(err)
  }
})

QUnit.test( 'hex to rgb - shorthand value', function( assert ) {
  const converted = colorConversionThing.hexToRGB( '#FFF' )
  try {
    assert.propEqual( converted, { r: 255, g: 255, b: 255 } ) 
  } catch(err) {
    console.log(err)
  }
})

QUnit.test( 'hex to rgb - invalid (non-string)', function( assert ) {
  assert.throws( function() { 
    colorConversionThing.hexToRGB( { r: 255, g: 255, b: 255} ) 
  } )
})

QUnit.test( 'hex to rgb - invalid hex value', function( assert ) {
  assert.throws( function() { 
    colorConversionThing.hexToRGB( '#WOWOWO' ) 
  } )
})

QUnit.test( 'hex to rgb - invalid #-less value', function( assert ) {
  assert.throws( function() {
    colorConversionThing.hexToRGB( 'WOWOWO' )
  })
})

// COLORNAME TESTS ////////////////////////////

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

QUnit.test( 'colorname to hex - invalid (non-string) value', function( assert ) {
  assert.throws( function() { 
    colorConversionThing.colornameToHex( { r: 255, g: 255, b: 255 }) 
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

QUnit.test( 'colorname to rgb - invalid (non-string) value', function( assert ) {
  assert.throws( function() { 
    colorConversionThing.colornameToRGB( { r: 255, g: 255, b: 255 } ) 
  } )
})

// HEX TO COLORNAME TESTS ////////////////////////////

QUnit.test( 'hex to colorname', function( assert ) {
  const converted = colorConversionThing.hexToColorname( '#FF69B4' )
  assert.equal( converted.toUpperCase(), 'HOTPINK')
})

QUnit.test( 'hex to colorname - shorthand value', function( assert ) {
  const converted = colorConversionThing.hexToColorname( '#FFF' )
  assert.equal( converted.toUpperCase(), 'WHITE')
})

QUnit.test( 'hex to colorname - invalid (non-string)', function( assert ) {
  assert.throws( function() { 
    colorConversionThing.hexToColorname( { r: 255, g: 255, b: 255} ) 
  } )
})

QUnit.test( 'hex to colorname - invalid hex value', function( assert ) {
  assert.throws( function() { 
    colorConversionThing.hexToColorname( '#WOWOWO' ) 
  } )
})

QUnit.test( 'hex to colorname - invalid #-less value', function( assert ) {
  assert.throws( function() {
    colorConversionThing.hexToColorname( 'WOWOWO' )
  })
})