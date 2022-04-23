let daynames = [];
let months = [];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = month[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;

document.getElementById("currentdate").textContent = fulldate;

