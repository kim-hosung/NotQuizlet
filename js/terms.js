// Retreives data from local storage to create two arrays
let terms = localStorage.getItem("globalTerms");
let definitions = localStorage.getItem("globalDefinitions");
let arrayTerms = JSON.parse(terms);
let arrayDefinitions = JSON.parse(definitions);

// Finds number of terms in study set
length = terms.length;

// Create a table to display data
const table = document.getElementById('termsTable');
const tbody = table.getElementsByTagName('tbody')[0];

// Loop through each element in arrayTerms and arrayDefinitions to display on new row of table
for (let i = 0; i < arrayTerms.length; i++) {
  const row = tbody.insertRow();
  const termCell = row.insertCell(0);
  const definitionCell = row.insertCell(1);
  
  termCell.innerHTML = arrayTerms[i];
  definitionCell.innerHTML = arrayDefinitions[i];
}