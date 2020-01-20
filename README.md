# smoothBlender
This is a script to mix an array of **RGB** colors in the **L\*a\*b\*** and the **L\*c\*h°** color spaces.

Includes:
* (color) name to rgb
* Array (made of 3 numbers) to rgb (CSS)
* rgb (CSS) to Array (made of 3 numbers)
* rgb to hex (& viceversa)
* hex to rgb (& viceversa)
* rgb to linear RGB (& viceversa)
* linear RGB to XYZ (& viceversa)
* XYZ to L\*a\*b\* with selected color gamma (& viceversa)
* L\*a\*b\* to L\*c\*h°(ab) (& viceversa)
* rgb to L\*a\*b\* (& viceversa)
* rgb to L\*c\*h° (& viceversa)
* L\*a\*b\* color mixer
* L\*c\*h° color mixer

## Color mixing

The color mixing can occur in any color space but my js project focuses on the additive mixing in the L\*a\*b\* and the L\*c\*h° color spaces by summing each of the 3 properties and making an arithmetic average of them.
*The LCH mixing even if it's working properly can give "unusual" results (like a color that wouldn't occur as a result with the LAB mixing)*

## constructor:

**syntax:** ```new smoothBlender(gamma)```

* **arguments description:** 

* the *gamma* argument is omittable, to get the list of all the aviable gammas use the **getAvaiableGammas()** function.
```javascript

const s = new smoothBlender(/*gamma*/); // omitted gamma argument sets the gamma to "sRGB"
s.setGamma("AppleRGB"); // changing the gamma after creating object

s.getAvaiableGammas(); // returns Object with all the supported gammas

```

## blending colors

**function name:** ```blend```

**arguments:** *( colorSpace, RGBColorArray, toCSS )*

**arguments description:** 

* *colorSpace* can be set to "LAB" or "LCH". 

* *RGBColorArray* must be an array of RGB values ( Arrays of 3 numbers ). 

* *toCSS* is a flag that changes the output of the function, if set to true the result will be "rgb(r,g,b)".
```javascript
var color1 = s.blend("LAB", [[255,0,0], [255,255,0]]); 
// expected value: [255, 163, 0]
 
s.RGBArraytoCSS(x);
// expected value: "rgb(255,163,0)"

s.blend("LCH", [[255,0,255], [240,128,128], [255,255,0], [0,128,128]], true); 
// expected value: "rgb(0,194,127)"

```
## General

For example let's check the **RGBtoHEX** function:

**arguments:** *( RGB, toCSS )*

**arguments description:** 

* *RGB* must be an array of 3 numbers.

* *toCSS* if set to true, the function will return "#<insert_hex_here>"
```javascript
s.RGBtoHEX([240,128,128]);
// expected output: "f08080"

s.RGBtoHEX([240,128,128],true);
// expected output: "#f08080"

```

Basically the **toCSS** argument is featured in every function that returns a supported color space like RGB or HEX and will convert the Array result into a CSS value.

---
[demo](https://phantom22.github.io/colorSmoothie/)
