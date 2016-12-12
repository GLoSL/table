const ready = function () {
  //Load
  const people = [
    {firstname:"José" , surname:"Manuel"},
    {firstname:"José" , surname:"Le Nervuré"},
    {firstname:"José" , surname:"a"},
    {firstname:"José" , surname:"c"},
  ];

  const tbody = document.querySelector("tbody");

  for (let i = 0; i < people.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let firstname = document.createTextNode(people[i].firstname);
    td.appendChild(firstname); //tr.innerHTML = `<td>${people[i]}`
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
};

document.addEventListener("DOMContentLoaded", ready);
