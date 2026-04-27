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
    while (i <= 5 ){
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





//how to comment:

//hello

/*
hello 
hello
hello
*/

