// init Aos
// AOS.init();
// pure Js script
// bounce Load(Tampilan loading awal)
onload = function () {
  const id = document.getElementById("bounce");
  let loading = document.getElementById("loading");
  let form = document.getElementById("form");

  let loaded = setInterval(() => {
    loading.classList.add("animate-bounce");
    form_login.classList.remove("h-screen");
  }, 1000);

  setTimeout(() => {
    clearInterval(loaded);
    loading.classList.add("hidden");
    id.classList.remove("h-screen");
    form.classList.remove("invisible");
    form_login.classList.add("h-screen");
    body.classList.remove("overflow-hidden");
  }, 1500);
};
// Fake data for localStroage Login

// let logoutButton = document.getElementById("logoutButton");
let form = document.getElementById("form");
let form_login = document.getElementById("form_login");
let nav = document.getElementById("nav");
let loading = document.getElementById("loading");
let body = document.getElementById("body");
const id = document.getElementById("bounce");
let admin = document.getElementById("admin");
let basic = document.getElementById("basic");
let main = document.querySelector("#main");
// logoutButton.style.display = "none";

function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  // logoutButton.style.display = "block";
  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    localStorage.setItem("role", "admin");
    swal("Good job!", "Successful to login!", "success");
    form.classList.add("invisible");
    form_login.classList.remove("h-screen");
    nav.classList.remove("invisible");
    main.classList.remove("invisible");
  } else {
    // form.style.display = "block";
    form.classList.remove("invisible");
    localStorage.setItem("role", "basic");
  }
}

if (localStorage.getItem("username")) {
  // form.style.display = "none";
  // logoutButton.style.display = "block";

  if (localStorage.getItem("role") == "admin") {
    form_login.classList.remove("h-screen");
    form_login.classList.add("h-0");
    form_login.classList.add("invisible");
    // form.classList.add("invisible");
    nav.classList.remove("invisible");
    main.classList.remove("invisible");
    // form.classList.add("invisible");
    // nav.classList.remove("invisible");
    // let loaded = setInterval(() => {
    //   loading.classList.add("animate-bounce");
    // }, 100);

    // setTimeout(() => {
    //   clearInterval(loaded);
    //   loading.classList.add("hidden");
    //   id.classList.remove("h-screen");
    //   form_login.classList.remove("h-screen");
    //   // form.classList.remove("invisible");
    //   nav.classList.remove("invisible");
    // }, 1000);
    onload = function () {
      const id = document.getElementById("bounce");
      let loading = document.getElementById("loading");
      let form = document.getElementById("form");

      let loaded = setInterval(() => {
        loading.classList.add("animate-bounce");
        form_login.classList.remove("h-screen");
      }, 0);

      setTimeout(() => {
        clearInterval(loaded);
        loading.classList.add("hidden");
        id.classList.remove("h-screen");
        form.classList.remove("invisible");
        form_login.classList.add("h-screen");
        body.classList.remove("overflow-hidden");
      }, 0);
    };
  } else {
    admin.style.display = "none";
    basic.style.display = "none";
    form.classList.remove("invisible");
  }

  function onLogout() {
    localStorage.clear();
    location.reload();
  }
}
// hamburger & active toggle
let hamburger = document.querySelector("#hamburger");
let menu = document.getElementById("mobile-menu-3");
let link = document.querySelectorAll(".link");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  // menu.classList.toggle("active");
});
menu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.remove("active");
});

// navbar

let fixed = document.querySelector(".fixed");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    fixed.classList.add("bayangan");
  } else {
    fixed.classList.remove("bayangan");
  }
});
// Toggle dark mode
// let darkMode = document.querySelector(".default-toggle-size");
document.getElementById("default-toggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
