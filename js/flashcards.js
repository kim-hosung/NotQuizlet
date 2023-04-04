let terms = localStorage.getItem("globalTerms");
let definitions = localStorage.getItem("globalDefinitions");
let arrayTerms = JSON.parse(terms);
let arrayDefinitions = JSON.parse(definitions);
let length = arrayTerms.length;

const element = document.getElementById("content");

var cardNumber = 0;
var showTerm = true;


element.innerHTML = arrayTerms[cardNumber];


document.getElementById("previous").onclick = function(){
    previousCard()
}

document.getElementById("flip").onclick = function(){
    flipCard()
}

document.getElementById("next").onclick = function(){
    nextCard()
}

function nextCard() {
    if(cardNumber<length-1){
        cardNumber = cardNumber + 1;
        element.innerHTML = arrayTerms[cardNumber];
    }
    else{
        alert("You have reached the end!");
    }

    showTerm = true;
}

function previousCard() {
    if(cardNumber != 0){
        cardNumber = cardNumber - 1;
        element.innerHTML = arrayTerms[cardNumber];
    }
    else {
        alert("There is no previous card!");
    }
}

function flipCard() {
    if(showTerm){
        element.innerHTML = arrayDefinitions[cardNumber];
        showTerm = false;
    }
    else{
        element.innerHTML = arrayTerms[cardNumber];
        showTerm = true;
    }
}