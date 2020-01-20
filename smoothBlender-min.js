var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):$jscomp.arrayIterator(a)};$jscomp.arrayFromIterator=function(a){for(var c,b=[];!(c=a.next()).done;)b.push(c.value);return b};$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};var smoothBlender=function(a){var c=this.getAvaiableGammas();this.gamma="string"==typeof a?c[a]:c.sRGB};smoothBlender.prototype.getAvaiableGammas=function(){return{"Adobe RGB (1998)":[[.5767309,.185554,.1881852,.2973769,.6273491,.0752741,.0270343,.0706872,.9911085],[2.041369,-.5649464,-.3446944,-.969266,1.8760108,.041556,.0134474,-.1183897,1.0154096]],AppleRGB:[[.4497288,.3162486,.1844926,.2446525,.6720283,.0833192,.0251848,.1411824,.9224628],[2.9515373,-1.2894116,-.4738445,-1.0851093,1.9908566,.0372026,.0854934,-.2694964,1.0912975]],"Best RGB":[[.6326696,.2045558,.1269946,.2284569,.7373523,.0341908,0,.0095142,.8156958],[1.7552599,-.4836786,-.253,-.5441336,1.5068789,.0215528,.0063467,-.0175761,1.2256959]],"Beta RGB":[[.6712537,.1745834,.1183829,.3032726,.6637861,.0329413,0,.040701,.784509],[1.683227,-.4282363,-.2360185,-.7710229,1.7065571,.04469,.0400013,-.0885376,1.272364]],"Bruce RGB":[[.4674162,.2944512,.1886026,.2410115,.6835475,.075441,.0219101,.0736128,.9933071],[2.7454669,-1.1358136,-.4350269,-.969266,1.8760108,.041556,.0112723,-.1139754,1.0132541]],"CIE RGB":[[.488718,.3106803,.2006017,.1762044,.8129847,.0108109,0,.0102048,.9897952],[2.3706743,-.9000405,-.4706338,-.513885,1.4253036,.0885814,.0052982,-.0146949,1.0093968]],"ColorMatch RGB":[[.5093439,.3209071,.1339691,.274884,.6581315,.0669845,.0242545,.1087821,.6921735],[2.6422874,-1.223427,-.3930143,-1.1119763,2.0590183,.0159614,.0821699,-.2807254,1.4559877]],"Don RGB 4":[[.6457711,.1933511,.1250978,.2783496,.6879702,.0336802,.0037113,.0179861,.8035125],[1.7603902,-.4881198,-.2536126,-.7126288,1.6527432,.0416715,.0078207,-.0347411,1.2447743]],"ECI RGB":[[.6502043,.1780774,.1359384,.3202499,.6020711,.0776791,0,.067839,.757371],[1.7827618,-.4969847,-.2690101,-.9593623,1.9477962,-.0275807,.0859317,-.1744674,1.3228273]],"Ekta Space PS5":[[.5938914,.2729801,.0973485,.2606286,.7349465,.0044249,0,.0419969,.7832131],[2.0043819,-.7304844,-.2450052,-.7110285,1.6202126,.0792227,.0381263,-.086878,1.2725438]],"NTSC RGB":[[.6068909,.1735011,.200348,.2989164,.586599,.1144845,0,.0660957,1.1162243],[1.9099961,-.5324542,-.2882091,-.9846663,1.999171,-.0283082,.0583056,-.1183781,.8975535]],"PAL/SECAM RGB":[[.430619,.3415419,.1783091,.2220379,.7066384,.0713236,.0201853,.1295504,.9390944],[3.0628971,-1.3931791,-.4757517,-.969266,1.8760108,.041556,.0678775,-.2288548,1.069349]],"ProPhoto RGB":[[.7976749,.1351917,.0313534,.2880402,.7118741,8.57E-5,0,0,.82521],[1.3459433,-.2556075,-.0511118,-.5445989,1.5081673,.0205351,0,0,1.2118128]],"SMPTE-C RGB":[[.3935891,.3652497,.1916313,.2124132,.7010437,.0865432,.0187423,.1119313,.9581563],[3.505396,-1.7394894,-.543964,-1.0690722,1.9778245,.0351722,.05632,-.1970226,1.0502026]],sRGB:[[.4124564,.3575761,.1804375,.2126729,.7151522,.072175,.0193339,.119192,.9503041],[3.2404542,-1.5371385,-.4985314,-.969266,1.8760108,.041556,.0556434,-.2040259,1.0572252]],"Wide Gamut RGB":[[.7161046,.1009296,.1471858,.2581874,.7249378,.0168748,0,.0517813,.7734287],[1.4628067,-.1840623,-.2743606,-.5217933,1.4472381,.0677227,.0349342,-.096893,1.2884099]]}};smoothBlender.prototype.setGamma=function(a){var c=this.getAvaiableGammas();if("string"==typeof a&&"undefined"!==typeof c[a])this.gamma=c[a];else throw"Invalid Gamma!";};smoothBlender.prototype.RGBArraytoCSS=function(a){if(this._C(a))return"rgb("+a.join(",")+")"};smoothBlender.prototype.RGBCSStoArray=function(a){if("string"==typeof a)return a.slice(4,-1).replace(/\s/g,"").split(",").map(function(a){return Number(a)})};smoothBlender.prototype.NAMEtoRGB=function(a,c){if("string"===typeof a){var b=document.createElement("div");b.style.display="none";b.id="$SMOOTHIE_COlOR";b.style.color=a;document.body.appendChild(b);b=document.getElementById("$SMOOTHIE_COlOR");var d=getComputedStyle(b).color,e=d.slice(4,-1).replace(/\s/g,"").split(",").map(function(a){return Number(a)});document.body.removeChild(b);return t._F(c)?d:e}};smoothBlender.prototype.RGBtoHEX=function(a,c){if(this._C(a)){var b=a.map(function(a){"number"===typeof a&&0<=a&&255>=a?(a=a.toString(16),a=2>a.length?"0"+a:a):a=void 0;return a}).join("");return this._F(c)?"#"+b:b}};smoothBlender.prototype.HEXtoRGB=function(a,c){if("string"===typeof a&&!isNaN(parseInt(a,16))){var b=new ArrayBuffer(4);(new DataView(b)).setUint32(0,parseInt(a,16),!1);b=(new Uint8Array(b)).slice(1);b=[].concat($jscomp.arrayFromIterable(b));return t._F(c)?"rgb("+b.join(",")+")":b}};smoothBlender.prototype.RGBtoLinearRGB=function(a){if(this._C(a)){var c=a[0]/255,b=a[1]/255;a=a[2]/255;c=.04045<c?Math.pow((c+.055)/1.055,2.4):c/12.92;b=.04045<b?Math.pow((b+.055)/1.055,2.4):b/12.92;a=.04045<a?Math.pow((a+.055)/1.055,2.4):a/12.92;return[c,b,a]}};smoothBlender.prototype.LinearRGBtoRGB=function(a,c){if(this._C(a)){var b=a[0],d=a[1],e=a[2];b=.0031308<b?1.055*Math.pow(b,1/2.4)-.055:12.92*b;d=.0031308<d?1.055*Math.pow(d,1/2.4)-.055:12.92*d;e=.0031308<e?1.055*Math.pow(e,1/2.4)-.055:12.92*e;b=[255*Math.max(0,Math.min(1,b)),255*Math.max(0,Math.min(1,d)),255*Math.max(0,Math.min(1,e))];return this._F(c)?"rgb("+b.join(",")+")":b}};smoothBlender.prototype.getReferenceWhite=function(){return[.95047,1,1.08883]};smoothBlender.prototype.LinearRGBtoXYZ=function(a){var c=this.getReferenceWhite();if(this._C(a)){var b=a[0],d=a[1];a=a[2];var e=this.gamma[0];return[(b*e[0]+d*e[1]+a*e[2])/c[0],(b*e[3]+d*e[4]+a*e[5])/c[1],(b*e[6]+d*e[7]+a*e[8])/c[2]]}};smoothBlender.prototype.XYZtoLinearRGB=function(a){if(this._C(a)){var c=a[0],b=a[1];a=a[2];var d=this.gamma[1];return[c*d[0]+b*d[1]+a*d[2],c*d[3]+b*d[4]+a*d[5],c*d[6]+b*d[7]+a*d[8]]}};smoothBlender.prototype.XYZtoLAB=function(a){if(this._C(a)){var c=a[0],b=a[1];a=a[2];c=.008856<c?Math.pow(c,1/3):7.787*c+16/116;b=.008856<b?Math.pow(b,1/3):7.787*b+16/116;return[116*b-16,500*(c-b),200*(b-(.008856<a?Math.pow(a,1/3):7.787*a+16/116))]}};smoothBlender.prototype.LABtoXYZ=function(a){if(this._C(a)){var c=(a[0]+16)/116,b=a[1]/500+c;a=c-a[2]/200;return[.95047*(.008856<b*b*b?b*b*b:(b-16/116)/7.787),.008856<c*c*c?c*c*c:(c-16/116)/7.787,1.08883*(.008856<a*a*a?a*a*a:(a-16/116)/7.787)]}};smoothBlender.prototype.LABtoLCH=function(a){if(this._C(a)){var c=a[1],b=a[2];return[a[0],Math.sqrt(c*c+b*b),0<=Math.atan2(b,c)?180*Math.atan2(b,c)/Math.PI:180*Math.atan2(b,c)/Math.PI+360]}};smoothBlender.prototype.LCHtoLAB=function(a){if(this._C(a)){var c=a[1],b=a[2]*Math.PI/180;return[a[0],Math.cos(b)*c,Math.sin(b)*c]}};smoothBlender.prototype.RGBtoLAB=function(a){if(this._C(a))return a=this.RGBtoLinearRGB(a),a=this.LinearRGBtoXYZ(a),this.XYZtoLAB(a)};smoothBlender.prototype.LABtoRGB=function(a,c){if(this._C(a)){var b=this.LABtoXYZ(a);b=this.XYZtoLinearRGB(b);b=this.LinearRGBtoRGB(b).map(function(a){return Math.round(a)});return this._F(c)?"rgb("+b.join(",")+")":b}};smoothBlender.prototype.RGBtoLCH=function(a){if(this._C(a))return a=this.RGBtoLinearRGB(a),a=this.LinearRGBtoXYZ(a),a=this.XYZtoLAB(a),this.LABtoLCH(a)};smoothBlender.prototype.LCHtoRGB=function(a,c){if(this._C(a)){var b=this.LCHtoLAB(a);b=this.LABtoXYZ(b);b=this.XYZtoLinearRGB(b);b=this.LinearRGBtoRGB(b).map(function(a){return Math.round(a)});return this._F(c)?"rgb("+b.join(",")+")":b}};smoothBlender.prototype.blend=function(a,c,b){var d=this,e=this,f=["LAB","LCH"];c.forEach(e._C);if("string"==typeof a&&f.includes(a)){c=c.map(function(b){return e["RGBto"+a].bind(d)(b)});f=c.length;var g=$jscomp.makeIterator([0,0,0]),h=g.next().value,k=g.next().value,l=g.next().value;c.forEach(function(a){var b=$jscomp.makeIterator(a);a=b.next().value;var c=b.next().value;b=b.next().value;h+=a;k+=c;l+=b});c=[h/f,k/f,l/f].map(Math.ceil);return e[a+"toRGB"].bind(this)(c,b)}throw"Invalid color space!";};smoothBlender.prototype._C=function(a){if("undefined"!==typeof a&&Array.isArray(a)&&3==a.length)return!0;throw"Invalid arguments!";};smoothBlender.prototype._F=function(a){return"boolean"==typeof a&&1==a};