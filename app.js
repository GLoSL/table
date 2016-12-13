// app global variable to maintain state :
const app = {};

// app model :
app.people = [
  {firstname:"José" , surname:"Manuel" , age:42 , height:201},
  {firstname:"José" , surname:"Le Nervuré" , age:42 , height:121},
  {firstname:"José" , surname:"Bovin" , age:42 , height:170},
  {firstname:"Libre" , surname:"El Taco" , age:42 , height:180},
];

//app controler
app.update = function() {
  const tbody = document.querySelector("tbody");
  // remove tbody content
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  // add new content from app.people
  const trContainer = document.createDocumentFragment();
  for (let i = 0; i < app.people.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${app.people[i].surname}</td><td>${app.people[i].firstname}</td><td>${app.people[i].age}</td><td>${app.people[i].height}</td>`;
    trContainer.appendChild(tr);
  }

  tbody.appendChild(trContainer);
}

// app view
app.onSubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const newPerson = {
    surname: formData.get("surname"),
    firstname: formData.get("firstname"),
    age: formData.get("age"),
    height: formData.get("height")
  };
  app.people.push(newPerson);
  app.update();
};

// DOM bindings
const ready = function() {
  // Initial drawing
  app.update();
  // On form submit
  document.getElementById("add-person").addEventListener("submit", app.onSubmit);
}
document.addEventListener("DOMContentLoaded", ready);
