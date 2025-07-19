const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
