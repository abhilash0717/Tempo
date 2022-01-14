// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

function show() {
  let x = document.getElementById("burger");
  x.style.display = "none";
}

function Close() {
  let x = document.getElementById("burger");
  x.style.display = "block";
}
