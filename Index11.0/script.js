window.alert("Hello World");
console.log("Welcome to CMP 128!");


let courseName = "CMP128.CN01";
let topic = "Web Design";
var numStudents = 18;
let score = 100;


//function for the text button 
function whatwewantinbutton() {
    let words = "We are in " + courseName + " and we are learning " + topic;
    // variable words will print out: We are in CMP128.CN01 and we are learning Web Design
    document.getElementById("JavaScriptOutput").innerHTML = words + 
    ".<br>There is: " + numStudents + " students. <br>The average score is: " + score;
}


//function for the multiplication
function myFunction(a, b){
    return a * b;
}

//function to push the multiplication
function multiplyOurNumbers() {
    let result = myFunction(4, 3);
    document.getElementById("JavaScriptOutput").innerHTML = 
    "The Function myFunction(4, 3) returns: " + result;
}


function changeText() {
    document.getElementById("dynamicOutput").innerHTML = "HI!";
}

//change the CSS style with Javascript
function changeStyle() {
    let practiceChange = document.getElementById("dynamicOutput");
    practiceChange.style.backgroundColor = "pink";
    practiceChange.style.color = "darkblue";
    practiceChange.style.padding = "10px";
    practiceChange.style.border = "2px solid black";
}

//making a square function
function squareNumber(x) {
    return x * x;
}
//showing the output for the square function while using a button in html
function Squaring() {
    let answer = squareNumber(10);
    document.getElementById("dynamicOutput").innerHTML =
    "The squaring returned: " + answer;
}


//function for removing a box
function removeBox(){
    let lessonBox = document.getElementById("dynamicContent");
    lessonBox.remove();
}

//function for removing the diamond image
function removeDiamondImage(){
    let imageBox = document.getElementById("removePractice");
    imageBox.remove();
}


//how to comment:

//hello

/*
hello 
hello
hello
*/