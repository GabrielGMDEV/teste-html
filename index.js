window.MENU_ABERTO = false;

const toggleMenu = () => {
  if (MENU_ABERTO === false) {
    MENU_ABERTO = true;
    document.getElementsByClassName("esquerda")[0].style.display = "block";
  } else {
    MENU_ABERTO = false;
    document.getElementsByClassName("esquerda")[0].style.display = "none";
  }
};

window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    document.getElementsByClassName("esquerda")[0].style.display = "block";
  } else {
    document.getElementsByClassName("esquerda")[0].style.display = "none";
  }
});
