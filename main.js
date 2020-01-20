var color1 = [0, 0, 0],
color2 = [0, 0, 0],
mixer = "LAB";

const s = new smoothBlender();

function updateColors() {

  for (let i = 0; i < 2; i++) {

  	const r = document.getElementById(`r${i+1}`).value,
  	g = document.getElementById(`g${i+1}`).value,
  	b = document.getElementById(`b${i+1}`).value;

  	window[`color${i+1}`] = [r,g,b].map(Number);

  	const color = window[`color${i+1}`],
  	css = s.RGBArraytoCSS(color);

  	document.getElementById(`cs${i+1}`).style.background = css;
  	document.getElementById(`s${i+1}`).textContent = css;

  }

  const blendedCSS = typeof mixer == "string" ? s.blend(mixer,[color1,color2],true) : "Invalid mixer";
  document.querySelector(".color3").style.background = blendedCSS;
  document.getElementById("s3").textContent = blendedCSS;


}

document.querySelectorAll("input").forEach( input => {

  const s = input.id.split(""),
  val = Math.floor(Math.random() * 255),
  index = ["r","g","b"].indexOf(s[0]);
  input.value = val;
  window[`color${s[1]}`][index] = val;

  input.addEventListener( "change", function(evt) { updateColors() })

});

document.querySelectorAll(".btn").forEach( v => { v.addEventListener("click",function(evt){

	document.querySelectorAll(".selected").forEach(v => v.classList.remove("selected"));
	evt.target.classList.add("selected");

	mixer = evt.target.id;

})})

updateColors();