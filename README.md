# colorSmoothie
This is a script to mix an array of **RGB** colors in the **LAB** color space.

Includes:
* (color) name to rgb
* rgb to hex (& viceversa)
* hex to rgb (& viceversa)
* rgb to linear RGB (& viceversa)
* linear RGB to XYZ (& viceversa)
* XYZ to L\*a\*b\* with selected color gamma (& viceversa)
* rgb to L\*a\*b\* (& viceversa)
* color mixer

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
