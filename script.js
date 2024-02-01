var randomColor;
var userColor;

const genColor = document.querySelector("#genColor");
const myColor = document.querySelector("#myColor");
const myColorValue = myColor.querySelector("p");
const genColorValue = genColor.querySelector("p");
const setBg = () => {
  randomColor = Math.floor(Math.random() * 16777215).toString(16);
  genColor.style.backgroundColor = "#" + randomColor;
  myColor.style.backgroundColor = "#" + randomColor;
  genColorValue.style.display = "none";
  myColorValue.style.display = "none";
}

genNew.addEventListener("click", setBg);
const inputField = document.getElementById('input')

inputField.addEventListener('blur', ({target}) => {
	userColor = target.value;	
})

checkColor.addEventListener('click', () => {


  myColor.style.display = "flex";
  myColor.style.background = `#${userColor}`;
  console.log(`deine Farbe: ${userColor}`);
  console.log(`zufällige farbe ${randomColor}`);
  myColorValue.style.display = "inline-block";
  genColorValue.style.display  = "inline-block"
  myColorValue.innerHTML = `#${userColor}`;
  genColorValue.innerHTML = `#${randomColor}`;
})

setBg();