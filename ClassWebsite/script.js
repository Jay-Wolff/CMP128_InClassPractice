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



    //if and else if example for levels
    let message = "";
    if(level === "newbie") {
        message = "Hi " + name + "you are a newbie";
    }
    else if (level === "beginner") {
        message = "Hi " + name + "you are a beginner coder";
    }
    else if (level === "intermediate") {
        message = "Hi " + name + "you are a intermediate coder";
    }
    else {
        message = "Hi " + name + "you are advanced";
    }

    document.getElementById("ifelsemessage").innerHTML = message;


    //switch case example for the levels
    //switch case variable to hold our message:
    let switchAnswer = "";

    switch (level) {
        case "newbie":
            switchAnswer = "Switch says: Newbie students will focus on the fundamentals of HTML first";
            break;
        case "beginner":
            switchAnswer = "Switch says: Beginner students will focus on basic tags, containers, and images in HTMl";
            break;
        case "intermediate":
            switchAnswer = "Switch says: Intermediate students will focus on layouts, forms, css, and Javascript functions";
            break;
        case "advanced":
            switchAnswer = "Switch says: Advanced students will focus on conditionals, decision branching, DOM changes, and storage";
            break;
        default:
         switchAnswer = "Switch says: Choose a Coding Experience Level";
    }

    document.getElementById("switchMessage").innerHTML = switchAnswer;

    //code for the slider for interest in the class
    let interestInClass = document.getElementById("interest").value;
    console.log("interest: ", interestInClass);

} //form code ending 


                                 //Loop practice section

                                        //While Loop
function runWhileLoop() {
    //make a variable for our start
    let i = 1;
    //variable to connect to the loopoutput in our html
    let output = "";

    //start of the while loop
    //while (condition)
    while (i <= 5){
        output += "While loop number: " + i + "<br>";
        i++; // i + 1;
    }

    document.getElementById("loopOutput").innerHTML = output;
    console.log("While Loop Finished")
}

                                        //For Loop
function runForLoop() {
    //variable to connect the output
    let output = "";

    //for (initialization ; condition ; incrementation)
    for (let i = 1; i <= 5 ; i++){
        output += "For Loop number: " + i + "<br>";
    }

    document.getElementById("loopOutput").innerHTML = output;
    console.log("For Loop Finished");
}

                                        //do-while loop
function runDoWhileLoop() {
    let i = 1;
    let output = "";

    do {
        output += "Do-while number: " + i + "<br>";
        i++;
    } while (i <= 5);

    document.getElementById("loopOutput").innerHTML = output;
    console.log("Do-while loop finished");
}

                                        //break example
function runBreakExample() {
    let output = "";

    for(let i = 1; i <= 10; i++){
        if(i === 8){
            output += "Break happened at Number: " + i + "<br>";
            break;
        } // decision branching
        output += "Number: " + i + "<br>";
    } // loop

    document.getElementById("loopOutput").innerHTML = output;
    console.log("Break Example finished");

} // function 


                                        //continue example
function runContinueExample() {
    let output = "";

    for(let i = 1; i <= 12 ; i++){
        if(i === 6){
            continue;
        }
        output += "Number: " + i + "<br>";
    }

    document.getElementById("loopOutput").innerHTML = output;
    console.log("Continue Example finished");
}

                                        //Nested Loop Example
function runNestedLoop(){
    let output = "";

    for(let row =1; row <=7 ; row++ ){
        for(let col =1; col <=7; col++ ){
            output += "Row " + row + ", Column " + col + "<br>";
        }//inner loop
        
    }//outer loop
    document.getElementById("loopOutput").innerHTML = output;
    console.log("Nested Loop finished");

}//function close


                                        //Variable Scope Example

//global variable 
let globalMessage = "Global Varible";

function VariableScopeExample(){
    //local variable 
    let output = globalMessage + "<br>"

    //block scope example
    if(true){
        let blockMesssage = "Block Message <br>";
        var innerBlockMessage = "Inner Block Message <br>";
        output += blockMesssage;
        output += innerBlockMessage;
    }

    //function example
    output += "this is the true function message"

    document.getElementById("loopOutput").innerHTML = output;
    console.log("Variable Scope Example finished");
}



                                        //going over arrays 
//let's create an array
let topics = ["HTML", "CSS", "JavaScript", 1234, "Java"];

console.log(topics[3]); // 1234
console.log(topics[1]); //return "CSS"
console.log(topics[3] = "Class");
console.log(topics[3]); //class
console.log(topics.length - 1);

for (let coding of topics){
    console.log(coding);
}

topics.forEach(function(item, index) { console.log(index + " - " + item); });


//how to show the array: topics
function showArray(){
    let output = "";

    for(let i = 0; i < topics.length; i++) {
        output +=  i + " | " + topics[i] + "<br>"
    }

    document.getElementById("arrayOutput").innerHTML = 
        "current coding languages: <br>" + output;

    console.log("show array done!");
}

//adding an element to the array
function addArrayElement() {
    topics.push("python");

     document.getElementById("arrayOutput").innerHTML = 
        "python is added using push() <br>" + 
        "New topics array: " + topics.join(", ");

    console.log("topics")
}

//adding an element to the front
function addFrontArrayElement() {
    topics.unshift("Ruby");

     document.getElementById("arrayOutput").innerHTML = 
        "Ruby is added to the front of the array using unshift() <br>" + 
        "New topics array: " + topics.join(", ");

    console.log("topics addition to the front")

}

//remove an element from the array 12
function removeBackArrayElement() {
      topics.pop();

     document.getElementById("arrayOutput").innerHTML = 
        "we are removing the last element with a pop() <br>" + 
        "New topics array: " + topics.join(", ");

    console.log("removing the last element from topic")
}

function removeFrontArrayElement() {
    topics.shift();

     document.getElementById("arrayOutput").innerHTML = 
        "we are removing the first element with a shift() <br>" + 
        "New topics array: " + topics.join(", ");

    console.log("removing the first element from topic")
}


//sorting an array
function sortArray() { //capitalization is a priority in array sorting
    topics.sort();

    document.getElementById("arrayOutput").innerHTML =
    "The array was sorted: <br>" + topics.join(", ");


    console.log("sorted");
}

//searching an array
function searchArray() { //searching means we are trying to find the position of an elementin the array
    //can search using: indexof()  /   lastindexof()
    let position = topics.indexOf("JavaScript");
    //if the search cannot find the element or the array is empty it will return: -1
    if(position === -1){
        document.getElementById("arrayOutput").innerHTML =
        "The element was not found in the array"
    } else {
        document.getElementById("arrayOutput").innerHTML =
        "Element was found at index: " + position;
    }

    console.log("index found: ", position);

}

//string practice 
function stringPrac() {
    let className = "   CMP 128 Web Development   ";

    document.getElementById("arrayOutput").innerHTML =
    "Original Name: " + className + "<br>" +
    "Character at index 10: " + className.charAt(13) + "<br>" +
    "Trimmed String: " + className.trim() + "<br>" +
    "Uppercase: " + className.toUpperCase() + "<br>" +
    "Lowercase: " + className.toLowerCase() + "<br>" +
    "Length Of the String: " + className.length + "<br>" +
    "splitting the string: " + className.split() + "<br>" ;

console.log("string prac done")
}

//how to comment:

//hello

/*
hello 
hello
hello
*/



                        //Calculator Prac Functions for project

//make out calculator variables [these are global variables]
let firstNumber = "";
let secondNumber = "";
let operation = ""; // relates to + - * / 

//function for the numbers being pressed
function pressNumber(num) {
    if (operation === "") {
        //let's add the idea for if the number has a decimal
        if(num === "." && firstNumber.includes(".")){
            return;
        }

        firstNumber += num;
        //document.getElementById("calcDisplay").innerHTML = firstNumber;
    }
    else {
        if(num === "." && secondNumber.includes(".")){
            return;
        }

        secondNumber += num;
        //document.getElementById("calcDisplay").innerHTML = secondNumber;
    }
        updateDisplay();
    //console.log("First # = ", firstNumber, "second # = ", secondNumber);

}

//function for clicking the operation
function setOperation(op){
    operation = op;
    updateDisplay();
    console.log("Operation set to: " + operation);
    
}

//function when clicking the equals sign  [need to add to this one] 
function calculateResult() {
    let result;

    //converting the number format from string to acutal numbers with "Number"
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    //make sure to end with an else 
    if(operation === "+"){
        result = num1 + num2;
    } 

    document.getElementById("calcDisplay").innerHTML = result;
    console.log("result: ", result);

    //This resets the numbers and allows the user to work with different choices
    firstNumber = "";
    secondNumber = "";
    operation = "";

}

//function when clicking clear
function clearCalculator() {
    firstNumber = "";
    secondNumber = "";
    operation = "";

    document.getElementById("calcDisplay").innerHTML = "0";

    console.log("calc cleared");

}

//function for updating the display with the operator and second number 
function updateDisplay() {
    let originalDisplay = firstNumber;

    if(operation !== ""){
        originalDisplay += operation;
    }
    if (secondNumber !== ""){
        originalDisplay += secondNumber;
    }

    document.getElementById("calcDisplay").innerHTML = originalDisplay;

}


// //if you want to do it with a switch case:
//     switch (operation) {
//         case "+":
//              result = num1 + num2;
//             break;
//         case "-":
//              result = num1 - num2;
//             break;
//         default:


