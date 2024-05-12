//const outputDate = document.querySelector("#current-year");
//const outputModified = document.querySelector("#last-modified");
  
//const date = new Date().getFullYear();
//let lastModified = document.lastModified;

//outputDate.textContent = date;
//outputModified.textContent = lastModified;

const today = new Date();
const year = document.querySelector("#current-year");
year.innerHTML = today.getFullYear();

let modif = new Date(document.lastModified).toLocaleString('en-us');
const lastModified = document.querySelector("#last-modified");
lastModified.innerHTML = `Last Modified: <span>${modif}</span>`;
