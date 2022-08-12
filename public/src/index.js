// init Aos
// AOS.init();
// pure Js script
// bounce Load(Tampilan loading awal)
onload = function () {
  const id = document.getElementById("bounce");
  let loading = document.getElementById("loading");

  let loaded = setInterval(() => {
    loading.classList.add("animate-bounce");
    // form_login.classList.remove("h-screen");
  }, 1000);

  setTimeout(() => {
    clearInterval(loaded);
    loading.classList.add("hidden");
    id.classList.remove("h-screen");
    // form.classList.remove("invisible");
    form_login.classList.remove("hidden-me");
    // body.classList.remove("overflow-hidden");
  }, 5000);
};
// Fake data for localStroage Login

// let logoutButton = document.getElementById("logoutButton");
let form = document.getElementById("form");
let form_login = document.getElementById("form_login");
let nav = document.getElementById("nav");
let loading = document.getElementById("loading");
let body = document.getElementById("body");
const id = document.getElementById("bounce");
let main = document.querySelector("#main");
let header = document.getElementById("beranda");

function onLogin() {
  localStorage.setItem("username", usernameInput.value);

  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    localStorage.setItem("role", "admin");

    form.classList.add("invisible");
    form_login.classList.remove("h-screen");
    header.classList.remove("hidden-me");
    main.classList.remove("hidden-me");
  } else {
    // form.style.display = "block";
    // swal("Oops", "Something went wrong!", "error");
    alert("salah");
    localStorage.setItem("role", "basic");
  }
}

if (localStorage.getItem("username")) {
  if (localStorage.getItem("role") == "admin") {
    form_login.classList.remove("h-screen");
    form_login.classList.add("h-0");
    form_login.classList.add("hidden-me");

    header.classList.remove("hidden-me");
    main.classList.remove("hidden-me");

    onload = function () {
      const id = document.getElementById("bounce");
      let loading = document.getElementById("loading");
      let form = document.getElementById("form");

      let loaded = setInterval(() => {
        loading.classList.add("animate-bounce");
        main.classList.add("hidden-me");
        header.classList.remove("container");
      }, 500);

      setTimeout(() => {
        clearInterval(loaded);
        main.classList.add("pt-8");
        main.classList.remove("hidden-me");
        header.classList.remove("hidden-me");
        header.classList.add("container");
        loading.classList.add("hidden");
        id.classList.remove("h-screen");
        form.classList.remove("invisible");
        form_login.classList.add("h-screen");
        body.classList.remove("overflow-hidden");
      }, 3000);
    };
  } else {
    admin.style.display = "none";
    basic.style.display = "none";
    form.classList.remove("invisible");
  }

  function onLogout() {
    header.classList.remove("container");
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
    fixed.classList.add("shadow-lg");
  } else {
    fixed.classList.remove("shadow-lg");
  }
});
// Toggle dark mode
// let darkMode = document.querySelector(".default-toggle-size");
document.getElementById("default-toggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
