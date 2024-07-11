function openMenu() {
  document.getElementById("mobile-navcontainer").style.width = "80vw";
  document.getElementById("mobile-navcontainer").classList.add("box-shadow");
}

function closeMenu() {
  document.getElementById("mobile-navcontainer").style.width = "";
  document.getElementById("mobile-navcontainer").classList.remove("box-shadow");
}