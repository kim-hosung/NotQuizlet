var terms = [];
var definitions = [];

document.getElementById("add").onclick = function(){
    var term = document.getElementById("term");
    var definition = document.getElementById("definition");

    if (term.value == "" || definition.value == "") {
             alert("You Are Missing a Field!");
    }

    else {
        addWord()
    }
}


function addWord() {
    var term = document.getElementById("term");
    var definition = document.getElementById("definition");
    var table = document.getElementById("tableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= term.value;
    row.insertCell(1).innerHTML= definition.value;
    terms.push(term.value);
    definitions.push(definition.value);
    document.querySelector("#term").value = "";
    document.querySelector("#definition").value = "";

    let globalTerms = terms;
    let stringTerm = JSON.stringify(globalTerms);
    localStorage.setItem("globalTerms", stringTerm);

    let globalDefinitions = definitions;
    let stringDef = JSON.stringify(globalDefinitions);
    localStorage.setItem("globalDefinitions", stringDef);
}