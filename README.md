# colorSmoothie
This is a script to mix an array of **RGB** colors in the **L\*a\*b\*** and the **L\*c\*h°** color spaces.

Includes:
* (color) name to rgb
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

## syntax
```javascript

const s = new colorSmoothie("AppleRGB"); // if the argument is omitted the standard value is "sRGB"
s.setGamma("sRGB"); // returning to standard gamma

s.LABcolorMixer([ [255,0,0], [255,255,0] ]); 
// expected value: [255, 163, 0]

s.LABcolorMixer([ [255,0,255], [240,128,128], [255,255,0], [0,128,128] ]); 
// expected value: [213, 150, 145] 

```
---
[demo](https://phantom22.github.io/colorSmoothie/)
