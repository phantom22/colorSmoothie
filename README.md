# colorSmoothie
This is a script to mix an array of **RGB** colors in the **LAB** color space.

Includes:
* (color) name to rgb
* rgb to hex
* hex to rgb
* rgb to linear RGB
* linear RGB to XYZ
* XYZ to L\*a\*b\* with selected color gamma
* L\*a\*b\* to rgb
* rgb to L\*a\*b\*

## syntax
```javascript

const s = new colorSmoothie();

s.LABcolorMixer([ [255,0,0], [255,255,0] ]); 
// expected value: [255, 163, 0]

s.LABcolorMixer([ [255,0,255], [240,128,128], [255,255,0], [0,128,128] ]); 
// expected value: [213, 150, 145] 

```
---
[demo](https://phantom22.github.io/colorSmoothie/)
