// Retreives data from local storage to create two arrays
let terms = localStorage.getItem("globalTerms");
let definitions = localStorage.getItem("globalDefinitions");
let arrayTerms = JSON.parse(terms);
let arrayDefinitions = JSON.parse(definitions);
let length = arrayTerms.length;

const element = document.getElementById("content");

// create variables
var cardNumber = 0;
var showTerm = true;

// Displays the first term on card when user enters page
element.innerHTML = arrayTerms[cardNumber];

// calls previousCard function when Previous button is pressed
document.getElementById("previous").onclick = function(){
    previousCard()
}

// Calls flipCard function when Flip button is pressed
document.getElementById("flip").onclick = function(){
    flipCard()
}

// Calls nextCard function when Next button is pressed
document.getElementById("next").onclick = function(){
    nextCard()
}

function nextCard() {
    // Determine if it is the last card
    if(cardNumber<length-1){
        cardNumber = cardNumber + 1;
        // Display the term of new card
        element.innerHTML = arrayTerms[cardNumber];
    }
    // Alert user it is the last card
    else{
        alert("You have reached the end!");
    }

    showTerm = true;
}

function previousCard() {
    // Determine if it is the first card
    if(cardNumber != 0){
        cardNumber = cardNumber - 1;
        // Display teh term of new card
        element.innerHTML = arrayTerms[cardNumber];
    }
    // Alert user it is the first card
    else {
        alert("There is no previous card!");
    }
}

// Determine if term or definition is showing and switch other
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