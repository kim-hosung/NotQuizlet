// Create seperate arrays to store user input
var terms = [];
var definitions = [];

// Add to Set button is clicked
document.getElementById("add").onclick = function(){

    // retrieve values from user input
    var term = document.getElementById("term");
    var definition = document.getElementById("definition");

    // If input box is empty user is given an alert
    if (term.value == "" || definition.value == "") {
             alert("You Are Missing a Field!");
    }

    // addWord function is called
    else {
        addWord()
    }
}


function addWord() {
    // assign values to variables
    var term = document.getElementById("term");
    var definition = document.getElementById("definition");
    var table = document.getElementById("tableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    // Adds a new row to the table and adds data to cells
    row.insertCell(0).innerHTML= term.value;
    row.insertCell(1).innerHTML= definition.value;
    // Adds  term to the terms array and definition to the definitions array
    terms.push(term.value);
    definitions.push(definition.value);
    // User input boxes are reset
    document.querySelector("#term").value = "";
    document.querySelector("#definition").value = "";

    // Stores terms array in local storage as a string
    let globalTerms = terms;
    let stringTerm = JSON.stringify(globalTerms);
    localStorage.setItem("globalTerms", stringTerm);
    // Stores definitions array in local storage as a string
    let globalDefinitions = definitions;
    let stringDef = JSON.stringify(globalDefinitions);
    localStorage.setItem("globalDefinitions", stringDef);
}