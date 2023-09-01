var css = document.querySelector('h3');
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById('gradient')
var btn = document.querySelector('button')

 function setGradient () {
    body.style.background =
        "linear-gradient(to right,"
        + color1.value +
        ", "
        + color2.value
         + ")";
     css.textContent = body.style.background + ";"
};

function randomNum() {
    return Math.round(Math.random()* (256)+1,0)
};

function rgbGenerator() {
    r = randomNum();
    g = randomNum();
    b = randomNum();
    return "rgb("+ r +","+g+ "," +b+")"
};

function setRandomGradient(c1, c2) {
    body.style.background =
        "linear-gradient(to right,"
        + c1 +
        ", "
        + c2
         + ")";
    css.textContent = body.style.background + ";"
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

btn.addEventListener('click', function () {
    col1 = rgbGenerator();
    col2 = rgbGenerator();
    setRandomGradient(col1, col2);
  
})

