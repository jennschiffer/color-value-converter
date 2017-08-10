/* the library for color conversion stuff */

const colornamesHex = require('./colors.js')

const self = module.exports = {
  
  /*
  * rgbToHex
  * takes an rgb object ex. { r: 255, g: 255, b: 255 }
  * returns a hex string ex. "#ffffff"
  */
  rgbToHex : function( rgbValue ) {
    // let's say we're given { r: 255, g: 239, b: 213 } 
    
    function isPositiveInteger( val ) {
      return ( Number.isInteger(val) &&  val > -1 ) // thnx @yousopunny on twitter for tip on DRYing this up :)
    }
    
    if ( typeof rgbValue !== 'object' ) {
      // if not an object, error
      throw 'rgbToHex error: parameter not an object'
    } else if ( !isPositiveInteger(rgbValue.r) || !isPositiveInteger(rgbValue.g) || !isPositiveInteger(rgbValue.b) ) {
        // if any invalid r g b properties, error
        throw 'rgbToHex error: rgb object missing color channels'
      }
    
    // it's an object AND has r g b properties
    let rHex = parseInt(rgbValue.r, 10).toString(16)
    rHex = ( rHex.length === 1 ) ? '0' + rHex : rHex
    
    let gHex = parseInt(rgbValue.g, 10).toString(16)
    gHex = ( gHex.length === 1 ) ? '0' + gHex : gHex
    
    let bHex = parseInt(rgbValue.b, 10).toString(16)
    bHex = ( bHex.length === 1 ) ? '0' + bHex : bHex
    
    const hexValue = '#' + rHex + gHex + bHex
    return hexValue
  },

  /*
  * hexToRGB
  * takes a hex string ex. "#ffffff"
  * returns an rgb object ex. { r: 255, g: 255, b: 255 }
  */
  hexToRGB : function( hexValue ) {
    // let's say we're given "#40E0D0"
    if ( typeof hexValue !== 'string' ) {
      throw 'hexToRGB error: parameter is not a string'
    }
    
    // let's ASSUME that the hexValue includes the octothorpe # :)
    const rgbValue = {
      r: parseInt(hexValue.substr(1, 2), 16),
      g: parseInt(hexValue.substr(3, 2), 16),
      b: parseInt(hexValue.substr(5, 2), 16)
    }
    return rgbValue
  },
  
    
  /*
  * colornameToHex
  * takes a color name string ex. "DarkSlateBlue"
  * returns a hex string ex. '#483D8B'
  */
  colornameToHex : function( colornameValue ) {
    const hexValue = colornamesHex[colornameValue.toUpperCase()] // "PapayaWhip" works, but "PaPaYaWhIp" or "papayawhip"
    if ( typeof hexValue !== 'string' ) {
      throw 'colornameToHex error: color name given is invalid'
    }
    
    return hexValue
  },

  /*
  * colornameToRGB
  * takes a colorname string ex. "papayawhip"
  * returns an rgb object ex. { r: 255, g: 239, b: 213 }
  */
  colornameToRGB : function( colornameValue ) {
    const hexValue = self.colornameToHex( colornameValue )
    const rgbValue = self.hexToRGB( hexValue )
    
    return rgbValue
  },
  
  /* 
  * hexToColorname
  * takes a hex string ex '#ffffff'
  * returns a colorname string ex white
  */
  hexToColorname : function( hexValue ) {
    // search colornamesHex for value of hexValue and return the key
    // if key doesn't exist, throw error 'hexToColorname error: hex value doesn't represent a valid color name'
    // else return colornameValue
    
    for (let colorname in colornamesHex) {
      if ( colornamesHex[colorname] === hexValue.toUpperCase() ) {
        return colorname
      }
    }
    
    // if no colorname value returned, that means the hex value doesn't represent a valid color name
    throw 'hexToColorname error: hex value doesn\'t represent a valid color name'
  },

  /*
  * rgbToColorname
  * takes a rgb object ex. { r: 255, g: 239, b: 213 }
  * returns a colorname string ex. papayawhip
  */
  rgbToColorname : function( rgbValue ) {
    const hexValue = self.rgbToHex( rgbValue )
    const colornameValue = self.hexToColorname( hexValue )
    
    return colornameValue
  },

}