function openMenu() {
  document.getElementById("mobile-navcontainer").style.width = "80%";
  document.getElementById("mobile-navcontainer").style.boxShadow = "-20px 20px 400px 200px rgba(0, 0, 0, 0.6)";
}

function closeMenu() {
  document.getElementById("mobile-navcontainer").style.width = "";
  document.getElementById("mobile-navcontainer").style.boxShadow = "";
}