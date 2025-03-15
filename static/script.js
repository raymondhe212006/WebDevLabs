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
findTheBanana(L1);
findTheBanana(L2);

L1.forEach(item => { if (item == "Banana") alert("We found a banana in the first array"); });
L2.forEach(item => { if (item == "Banana") alert("We found a banana in the first array"); });

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting;

    if(5<h && h<12){
        greeting = "Good morning,";
    }
    else if(h<18){
        greeting = "Good afternoon,";
    }
    else if(h<20){
        greeting = "Good evening,";
    }
    else{
        greeting = "Good night,";
    }

    let E = document.getElementById("greeting");
    E.innerHTML = greeting + " my name is Raymond He";

}
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    greetingFunc();
}