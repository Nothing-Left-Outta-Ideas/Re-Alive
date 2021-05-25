
// Get the modal
const modal = document.querySelector("#myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
let modalOpen = function() {
  modal.style.display = "block";
  console.log("Modal Opened");
}

// When the user clicks on <span> (x), close the modal
let modalClose = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
