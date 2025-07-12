let menu = document.querySelector("#menu-con");
let navlist = document.querySelector(".nav-list");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
