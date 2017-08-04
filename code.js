/* the library for color conversion stuff */

module.exports = {
  
  /*
  * rgbToHex
  * takes an rgb object ex. { r: 255, g: 255, b: 255 }
  * returns a hex string ex. "#ffffff"
  */
  rgbToHex : function( rgbValue ) {
    // let's say we're given { r: 255, g: 239, b: 213 }
    if ( typeof rgbValue !== 'object' ) {
      // if not an object, error
      console.log('rgbToHex error: parameter not an object')
      return null
    } else if ( !rgbValue.r || !rgbValue.g || !rgbValue.b ) {
        // if no r g b properties, error
        console.log('rgbToHex error: rgb object missing color channels')
        return null
      }
    
    // it's an object AND has r g b properties
    const rHex = parseInt(rgbValue.r, 10).toString(16)
    const gHex = parseInt(rgbValue.g, 10).toString(16)
    const bHex = parseInt(rgbValue.b, 10).toString(16)
    
    /*
    IMPORTANT TO DO --- hex string length check & test!
    if ( rHex.length === 1 ) {
      rHex = '0' + rHex;
    } */
    
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
      console.log('hexToRGB error: parameter is not a string')
      return null
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
  * colornameToRGB
  * takes a colorname string ex. papayawhip
  * returns an rgb object ex. { r: 255, g: 239, b: 213 }
  */
  colornameToRGB : function( colornameValue ) {

  },

  /*
  * rgbToColorname
  * takes a rgb object ex. { r: 255, g: 239, b: 213 }
  * returns a colorname string ex. papayawhip
  */
  rgbToColorname : function( rgbValue ) {

  },
  
  /* TODO
  * hexToColorname
  * takes a hex string ex '#ffffff'
  * returns a colorname string ex white
  * NOTE: this just returns rgbToColorname(hexToRGB(hexValue))
  */

}