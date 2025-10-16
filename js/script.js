"use strick";
const page = document.querySelector(".page-html");
const switcher = document.querySelector(".theme-switcher");
const title = document.querySelector(".header__title");

switcher.addEventListener("click", () => {
  if (page.classList.contains("theme-dark")) {
    page.classList.remove("theme-dark");
    switcher.classList.remove("theme-switcher--right");
    title.innerHTML = `<p>Theme: <strong>light</strong> </p>`;
  } else {
    page.classList.add("theme-dark");
    switcher.classList.add("theme-switcher--right");
    title.innerHTML = "Theme: dark";
  }
});
