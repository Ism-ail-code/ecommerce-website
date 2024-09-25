if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.addEventListener("beforeunload", function () {
  sessionStorage.setItem("scrollPos", window.scrollY);
});

window.addEventListener("load", function () {
  const scrollPos = sessionStorage.getItem("scrollPos");
  if (scrollPos) {
    window.scrollTo(0, scrollPos);
  }
});
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
bar.addEventListener("click", () => {
  nav.classList.add("active");
});
close.addEventListener("click", () => {
  nav.classList.remove("active");
});

let navbarlinks = document.querySelector("#navbar i a");
navbarlinks.addEventListener("click", (e) => {
  navbarlinks.classList.toggle("active");
});
