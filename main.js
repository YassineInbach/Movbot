var toggele = document.getElementById("toggele");
var icon = document.querySelector(".fa-bars");
var menu = document.querySelector(".menu-bar");
var BtnScroll = document.querySelector(".btn-scroll");
var Scroll = document.getElementById("scroll-top");
let open = false;
toggele.addEventListener("click", () => {
  if (!open) {
    icon.classList.toggle("fa-xmark");
    document.body.style.overflowY = "hidden";
    menu.classList.add("open");
    open = true;
    console.log("open");
  } else {
    icon.classList.toggle("fa-xmark");
    menu.classList.remove("open");
    document.body.style.overflowY = "auto";
    open = false;
    console.log("close");
  }
});
function closeMenu() {
  open = false;
  menu.classList.remove("open");
  console.log("true");
  icon.classList.toggle("fa-xmark");
}
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    BtnScroll.classList.add("active");
  } else {
    BtnScroll.classList.remove("active");
  }
  Scroll.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
