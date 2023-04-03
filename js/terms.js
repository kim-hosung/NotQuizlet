let terms = localStorage.getItem("globalTerms");
let definitions = localStorage.getItem("globalDefinitions");
let arrayTerms = JSON.parse(terms);
let arrayDefinitions = JSON.parse(definitions);
length = terms.length;

const table = document.getElementById('termsTable');
const tbody = table.getElementsByTagName('tbody')[0];

for (let i = 0; i < arrayTerms.length; i++) {
  const row = tbody.insertRow();
  const termCell = row.insertCell(0);
  const definitionCell = row.insertCell(1);
  
  termCell.innerHTML = arrayTerms[i];
  definitionCell.innerHTML = arrayDefinitions[i];
}