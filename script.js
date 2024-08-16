function scrollToTop() {
  var element = document.getElementById("slider");
  element.scrollIntoView({ behavior: "smooth" });
}
document.getElementById("menu_toggle").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
