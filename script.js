let leftValue_ = document.getElementById("scoreboard_l");
let rightValue_ = document.getElementById("scoreboard_r");

let leftValue = Number(leftValue_.innerText);
let rightValue = Number(rightValue_.innerText);


// left one
function leftOne(){
    leftValue += 1;
    leftValue_.innerText = leftValue;
}
function leftTwo(){
    leftValue += 2;
    leftValue_.innerText = leftValue;
}
function leftThree(){
    leftValue += 3;
    leftValue_.innerText = leftValue;
}

//Right one
function rightOne(){
    rightValue += 1;
    rightValue_.innerText = rightValue;
}
function rightTwo(){
    rightValue += 2;
    rightValue_.innerText = rightValue;
}
function rightThree(){
    rightValue += 3;
    rightValue_.innerText = rightValue;
}
