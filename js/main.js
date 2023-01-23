var terms = [];
var definitions = [];
var words = new Object();

var number = 6

document.getElementById("addMoreButton").onclick = function(){
    var tableRow = document.getElementById("table");
    var row = tableRow.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = number + ")";
    cell2.innerHTML = '<input type=text class="input" id=tb';
    cell3.innerHTML = "Cell of New Row";
}

document.getElementById("createButton").onclick = function(){
    terms[0] = document.getElementById("term1").value;
    terms[1] = document.getElementById("term2").value;
    terms[2] = document.getElementById("term3").value;
    terms[3] = document.getElementById("term4").value;
    terms[4] = document.getElementById("term5").value;
    definitions[0] = document.getElementById("def1").value;
    definitions[1] = document.getElementById("def2").value;
    definitions[2] = document.getElementById("def3").value;
    definitions[3] = document.getElementById("def4").value;
    definitions[4] = document.getElementById("def5").value;
}

for (let i=0; i < 5; i++){
    words[terms[i]] = definitions[i];
}

console.dir(terms);
console.dir(definitions);
console.dir(words);