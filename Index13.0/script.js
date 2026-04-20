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
    if(a>b){
        return "a is bigger";
    }else if(b>a) {
        return "b is bigger";
    } else if (a==b){
        return "a = b"
    } else {
        return "error"
    }

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

//fucntion for the form information from the user
function handleForm(event) {
    //stop the page refresh after we click the submit
    event.preventDefault();

    //get the values from the inputs in the form
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let level = document.getElementById("level").value;

    //show the results of the value in the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Level:", level);

    //show in seperate stance the form was submitted
    console.log("Form submitted:", 
        {   
            name: name,
            email: email,
            level: level
        }
    );

    //store the values in our local storage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userLevel", level);

}





//how to comment:

//hello

/*
hello 
hello
hello
*/

