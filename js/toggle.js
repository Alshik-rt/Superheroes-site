document.getElementsByClassName("header__theme-toggle")[0].onclick =
  toggleTheme;
window.onload = checkTheme;

function toggleTheme() {
  if (localStorage.getItem("theme") === "light") {
    toggleThemeDark();
  } else {
    toggleThemeLight();
  }
}

function toggleThemeDark() {
  localStorage.setItem("theme", "dark");
  document.getElementsByClassName("header__toggle")[0].style.transform =
    "translateX(0px)";
  document.getElementsByClassName("header__toggle")[0].style.backgroundColor =
    "#2f4b66";
  document.getElementsByClassName("header__theme-toggle")[0].style.border =
    "3px inset #7a9da1";
  document.getElementsByClassName(
    "header__theme-toggle"
  )[0].style.backgroundImage = "url(img/toggle_dark.png)";
  document.body.style.backgroundColor = "#000";
  if (localStorage.getItem("page") === "info") {
    document.getElementsByClassName("hero-info")[0].style.color = "#fff";
    document.getElementsByClassName("hero-info__main")[0].style.backgroundColor = "rgba(0, 0, 0, .8)";
  }
}

function toggleThemeLight() {
  localStorage.setItem("theme", "light");
  document.getElementsByClassName("header__toggle")[0].style.transform =
    "translateX(47px)";
  document.getElementsByClassName("header__toggle")[0].style.backgroundColor =
    "#0a81f7";
  document.getElementsByClassName("header__theme-toggle")[0].style.border =
    "3px inset #3cd4d4";
  document.getElementsByClassName(
    "header__theme-toggle"
  )[0].style.backgroundImage = "url(img/toggle_light.png)";
  document.body.style.backgroundColor = "#fff";
  if (localStorage.getItem("page") === "info") {
    document.getElementsByClassName("hero-info")[0].style.color = "#000";
    document.getElementsByClassName("hero-info__main")[0].style.backgroundColor = "rgba(255, 255, 255, .4)";
  }
}

function checkTheme() {
  if (localStorage.getItem("theme") === "light") {
    toggleThemeLight();
  }
}
