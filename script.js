// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var counter = 0;
var plus1Btn = document.getElementById("plus1");
var minus1Btn = document.getElementById("minus1");
var plus10Btn = document.getElementById("plus10");
var minus10Btn = document.getElementById("minus10");
var plus50Btn = document.getElementById("plus50");
var minus50Btn = document.getElementById("minus50");

var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");
var story = "Once upon a time, ";

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1Btn.addEventListener("click", add1);
minus1Btn.addEventListener("click", sub1);
plus10Btn.addEventListener("click", plus10);
minus10Btn.addEventListener("click", sub10);
plus50Btn.addEventListener("click", plus50);
minus50Btn.addEventListener("click", sub50);

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}
function sub1() {
  counter -= 1;
  displayEl.innerHTML = counter;
}
function plus10() {
  counter += 10;
  displayEl.innerHTML = counter;
}
function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}
function plus50() {
  counter += 50;
  displayEl.innerHTML = counter;
}
function sub50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);

function updateStory() {
  var newWord = stringInEl.value;
  stringInEl.value = "";
  story += newWord + " ";
  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand4Btn = document.getElementById("rand4");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");
var rand4OutEl = document.getElementById("rand4-out");
var randInOne = +document.getElementById("rand-in1").value;
var randInTwo = +document.getElementById("rand-in2").value;

rand1Btn.addEventListener("click", showRand1);
rand2Btn.addEventListener("click", showRand2);
rand3Btn.addEventListener("click", showRand3);
rand4Btn.addEventListener("click", showRand4);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}
function showRand2() {
  var rand2 = Math.random() * 100;
  rand2 = rand2.toFixed(3);
  rand2OutEl.innerHTML = rand2;
}
function showRand3() {
  var rand3 = Math.random() * 10;
  rand3 = rand3 - 5;
  rand3 = rand3.toFixed(3);
  rand3OutEl.innerHTML = rand3;
}
function showRand4() {
  var randInOne = +document.getElementById("rand-in1").value;
  var randInTwo = +document.getElementById("rand-in2").value;
  var rand4 = Math.random() * randInTwo + randInOne;
  rand4 = Math.floor(rand4);
  rand4OutEl.innerHTML = rand4;
}

var body = document.getElementById("body");
var html = document.getElementById("HTML");
var randSize = document.getElementById("random-size");
var randColor = document.getElementById("random-rgb");
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var color = "rgb(" + r + "," + g + "," + b + ")";

randColor.addEventListener("click", colorChange);

function colorChange() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = "rgb(" + r + "," + g + "," + b + ")";
  body.style.backgroundColor = color;
  html.style.backgroundColor = color;
  displayEl.style.backgroundColor = color;
}

randSize.addEventListener("click", fontsSize);

function fontsSize() {
  body.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("h1").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("h2").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("h22").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("h23").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("p1").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("p2").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("p3").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("p4").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("p5").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("p6").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("p7").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("p8").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  document.getElementById("p9").style.fontSize =
    Math.floor(Math.random() * 25 + 5) + "px";
  displayEl.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  stringInEl.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  stringOutEl.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  rand1OutEl.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  rand2OutEl.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  rand3OutEl.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  rand4OutEl.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  rand1Btn.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  rand2Btn.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  rand3Btn.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  rand4Btn.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  plus1Btn.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  plus10Btn.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  plus50Btn.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  minus1Btn.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  minus10Btn.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
  minus50Btn.style.fontSize = Math.floor(Math.random() * 25 + 5) + "px";
}

var resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", resetPage);

function resetPage() {
  rand1OutEl.innerHTML = "----------";
  rand2OutEl.innerHTML = "----------";
  rand3OutEl.innerHTML = "----------";
  rand4OutEl.innerHTML = "----------";
  randInOne.value = " ";
  randInTwo.value = " ";
  displayEl.innerHTML = "0";
  displayEl.style.backgroundColor = "#C0BA3F";
  body.style.backgroundColor = "white";
  html.style.backgroundColor = "#9ae4c8";
  stringOutEl.innerHTML = "Once upon a time,";
  stringInEl.innerHTML = " ";
  document.getElementById("h1").style.fontSize = "32px";
  document.getElementById("h2").style.fontSize = "24px";
  document.getElementById("h22").style.fontSize = "24px";
  document.getElementById("h23").style.fontSize = "24px";
  document.getElementById("p1").style.fontSize = "16px";
  document.getElementById("p2").style.fontSize = "16px";
  document.getElementById("p3").style.fontSize = "16px";
  document.getElementById("p4").style.fontSize = "16px";
  document.getElementById("p5").style.fontSize = "16px";
  document.getElementById("p6").style.fontSize = "16px";
  document.getElementById("p7").style.fontSize = "16px";
  document.getElementById("p8").style.fontSize = "16px";
  document.getElementById("p9").style.fontSize = "16px";
  displayEl.style.fontSize = "100px";
  stringInEl.style.fontSize = "24px";
  stringOutEl.style.fontSize = "32px";
  rand1OutEl.style.fontSize = "20px";
  rand2OutEl.style.fontSize = "20px";
  rand3OutEl.style.fontSize = "20px";
  rand4OutEl.style.fontSize = "20px";
  rand1Btn.style.fontSize = "20px";
  rand2Btn.style.fontSize = "20px";
  rand3Btn.style.fontSize = "20px";
  rand4Btn.style.fontSize = "20px";
  plus1Btn.style.fontSize = "20px";
  plus10Btn.style.fontSize = "20px";
  plus50Btn.style.fontSize = "20px";
  minus1Btn.style.fontSize = "20px";
  minus10Btn.style.fontSize = "20px";
  minus50Btn.style.fontSize = "20px";
}
