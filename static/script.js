let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x,y);
SumNPrint(A,B);

if (C.length>z){
    console.log(C);
}
else if (C.length<z){
    console.log(z);
}
else{
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(L) {
    for(let i=0; i<L.length; i++){
        if(L[i]=="Banana"){
            alert("found the Banana in " + i);
        }
    }
}

//findTheBanana(L1);
//findTheBanana(L2);

//L1.forEach(item => { if (item == "Banana") alert("We found a banana in the first array"); });
//L2.forEach(item => { if (item == "Banana") alert("We found a banana in the first array"); });


function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let g;

    if(5<h && h<12){
        g = "Good morning,";
    }
    else if(h<18){
        g = "Good afternoon,";
    }
    else if(h<20){
        g = "Good evening,";
    }
    else{
        g = "Good night,";
    }

    let E = document.getElementById("greeting");
    E.innerHTML = g + " my name is Raymond He";

}


function addYear() {
    document.getElementById("copyYear").textContent = new Date().getFullYear();
}

// function showList() {
//     document.getElementById("funList").style.display = "block";
//     document.getElementById("showListBtn").style.display = "none";
// }


$(document).ready(function(){
    $("#readMore").click(function(){
        $("#shortBio").hide();
        $("#longBio").show();
        $("#readMore").hide();
        $("#readLess").show();
    });

    $("#readLess").click(function(){
        $("#longBio").hide();
        $("#shortBio").show();
        $("#readLess").hide();
        $("#readMore").show();
    });
});



function validate() {
    let isValid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let comment = document.getElementById("comment");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let commentError = document.getElementById("commentError");
    let errorDiv = document.getElementById("errorMessages");

    resetErrors([nameError, emailError, commentError, errorDiv]);

    if (!name.checkValidity()) {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    if (!email.checkValidity()) {
        emailError.textContent = "Valid email is required.";
        isValid = false;
    }

    if (!comment.checkValidity()) {
        commentError.textContent = "Message is required.";
        isValid = false;
    }

    if (!isValid) {
        errorDiv.textContent = "⚠️ Please fix the errors above and try again.";
    }

    return isValid;
}

function resetErrors(elements) {
    elements.forEach((el) => {
        el.textContent = "";
    });
}

function getAdvice() {
    if (window.location.href.includes("fun.html")) {
        fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(data => {
                document.getElementById("adviceText").innerText = data.slip.advice;
            })
            .catch(error => {
                document.getElementById("adviceText").innerText = "Error fetching advice. Try again!";
                console.error("Error fetching advice:", error);
            });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.includes("contact.html")) {
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();
            validate();
        });
    }

    if (window.location.href.includes("fun.html")) {
        document.getElementById("adviceButton").addEventListener("click", getAdvice);
    }

    if (document.getElementById("copyYear")) {
        document.getElementById("copyYear").textContent = new Date().getFullYear();
    }

    if ((window.location.pathname === "" || window.location.pathname.includes("index.html")) && document.getElementById("greeting")) {
        greetingFunc();
    }
});
