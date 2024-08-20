function scrollToTop() {
  var element = document.getElementById("slider");
  element.scrollIntoView({ behavior: "smooth" });
}
document.querySelector(".menu-toggle").addEventListener("click", function () {
  const menu = document.querySelector(".menu");
  menu.style.display =
    menu.style.display === "none" || menu.style.display === ""
      ? "flex"
      : "none";
});
