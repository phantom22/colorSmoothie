class colorSmoothie {

  constructor() {}

    NAMEtoRGB(name) {

    if ( typeof name === "string" ) {

      const e = document.createElement("div");
      e.style.display = "none";
      e.id = "$SMOOTHIE_COlOR";
      e.style.color = name;

      document.body.appendChild(e);

      const q = document.getElementById("$SMOOTHIE_COlOR"),
      RGB = getComputedStyle(q).color;

      document.body.removeChild(q);

      return RGB.slice(4,-1).replace(/\s/g,"").split(",").map(v=>Number(v));

    }

  }

  RGBtoHEX(RGB) {

    const NUMBERtoHEX = (number) => { if ( typeof number === "number" && number >= 0 && number <= 255 ) {const hex = number.toString(16); return hex.length < 2 ? "0" + hex : hex }}

    if ( typeof RGB !== "undefined" && Array.isArray(RGB) === true && RGB.length === 3 ) {

    return RGB.map( v => NUMBERtoHEX(v) ).join("");

    }

  }

  HEXtoRGB(HEX) {

    if ( typeof HEX === "string" && !isNaN(parseInt(HEX, 16)) ) {

      let arrBuff = new ArrayBuffer(4),
      vw = new DataView(arrBuff);
      vw.setUint32(0, parseInt(HEX, 16), false);
      const arrByte = new Uint8Array(arrBuff).slice(1);

      return [...arrByte]

    }

  }

  // https://github.com/antimatter15/rgb-lab
  LABtoRGB(LAB) {

    if (typeof LAB !== "undefined" && Array.isArray(LAB) === true && LAB.length === 3) {

      let y = (LAB[0] + 16) / 116, x = LAB[1] / 500 + y, z = y - LAB[2] / 200, r, g, b;

      x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16/116) / 7.787);
      y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16/116) / 7.787);
      z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16/116) / 7.787);

      r = x *  3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y *  1.8758 + z *  0.0415;
      b = x *  0.0557 + y * -0.2040 + z *  1.0570;

      r = (r > 0.0031308) ? (1.055 * Math.pow(r, 1/2.4) - 0.055) : 12.92 * r;
      g = (g > 0.0031308) ? (1.055 * Math.pow(g, 1/2.4) - 0.055) : 12.92 * g;
      b = (b > 0.0031308) ? (1.055 * Math.pow(b, 1/2.4) - 0.055) : 12.92 * b;

      return [Math.max(0, Math.min(1, r)) * 255, Math.max(0, Math.min(1, g)) * 255, Math.max(0, Math.min(1, b)) * 255]

    }

  }

  // https://github.com/antimatter15/rgb-lab
  RGBtoLAB(RGB){

    if (typeof RGB !== "undefined" && Array.isArray(RGB) === true && RGB.length === 3) {

      let r = RGB[0] / 255, g = RGB[1] / 255, b = RGB[2] / 255, x, y, z;

      r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

      x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
      y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
      z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

      x = (x > 0.008856) ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
      y = (y > 0.008856) ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
      z = (z > 0.008856) ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;

      return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]

    }

  }

  LABcolorMixer(RGBcolorArray) {
      
    const validate = ( arr ) => typeof arr !== "undefined" && Array.isArray(arr) && arr.length == 3;
  
    RGBcolorArray.forEach( v => { if (!validate(v)) {throw `Invalid properties!`} });

    if ( typeof RGBcolorArray !== "undefined" ) {

      const LABcolorArray = RGBcolorArray.map( v => this.RGBtoLAB(v) );
  
      let L = 0, A = 0, B = 0;

      LABcolorArray.forEach( LAB => {L += LAB[0]; A += LAB[1]; B += LAB[2] });

      const colors = LABcolorArray.length;
      L = Math.ceil( L / colors ), A = Math.ceil( A / colors ), B = Math.ceil( B / colors );
  
      return this.LABtoRGB([L,A,B]).map( v => Math.round(v) );

    }

  }

}