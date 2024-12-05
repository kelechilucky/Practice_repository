const toggleMenu = document.getElementById("toggleMenu");
const hideMenu = document.getElementById("hideMenu");
const sidebar = document.getElementById("sidebar");

toggleMenu.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  hideMenu.classList.toggle("showClose");
  toggleMenu.classList.toggle("hideMenu");
});

hideMenu.addEventListener("click", () => {
  sidebar.classList.remove("show");
  hideMenu.classList.remove("showClose");
  toggleMenu.classList.remove("hideMenu");
});
