var color1 = [0, 0, 0];
var color2 = [0, 0, 0];

const s = new colorSmoothie();

const inputs = document.querySelectorAll("input");

function updateColors(id) {

  if (typeof id === "string") {

    const t = id.split(""),
    index = ["r","g","b"].indexOf(t[0]),
    value = document.getElementById(id).value;

    window[`color${t[1]}`][index] = Number(value);

    const mixed = s.LABcolorMixer([color1,color2]),
    resultX = "rgb("+window[`color${t[1]}`].join(",")+")",
    resultY = `rgb(${mixed[0]},${mixed[1]},${mixed[2]})`;

    document.querySelector(`#cs${t[1]}`).style.background = resultX;
    document.querySelector(`#s${t[1]}`).textContent = resultX;

    document.querySelector(".color3").style.background = resultY;
    document.querySelector("#s3").textContent = resultY;

  }

}

inputs.forEach( input => {

  const s = input.id.split(""),
  val = Math.floor(Math.random() * 255),
  index = ["r","g","b"].indexOf(s[0]);
  input.value = val;
  window[`color${s[1]}`][index] = val;

  updateColors(input.id);

  input.addEventListener( "change", function(evt) { updateColors(evt.target.id) })

});