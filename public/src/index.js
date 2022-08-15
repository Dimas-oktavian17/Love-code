// bounce Load(Tampilan loading awal)
onload = function () {
  const id = document.getElementById("bounce");
  let loading = document.getElementById("loading");

  let loaded = setInterval(() => {
    loading.classList.add("animate-bounce");
  }, 1000);

  setTimeout(() => {
    clearInterval(loaded);
    loading.classList.add("hidden");
    id.classList.remove("h-screen");
    form_login.classList.remove("hidden-me");
    body.classList.remove("overflow-hidden");
  }, 5000);
};
// Fake data for localStroage Login

let form_login = document.getElementById("form_login");
let nav = document.getElementById("nav");
let loading = document.getElementById("loading");
let body = document.getElementById("body");
const id = document.getElementById("bounce");
let main = document.querySelector("#main");
let header = document.getElementById("beranda");

function onLogin() {
  localStorage.setItem("username", usernameInput.value);

  if (usernameInput.value == "myLisa" && passwordInput.value == "myLisa123") {
    localStorage.setItem("role", "admin");
    form_login.classList.remove("h-screen");
    header.classList.remove("hidden-me");
    main.classList.remove("hidden-me");
  } else {
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
        form_login.classList.add("h-screen");
        body.classList.remove("overflow-hidden");
      }, 3000);
    };
  } else {
    form_login.classList.remove("hidden-me");
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
  menu.classList.toggle("hidden");
});
menu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("active");
});

// navbar

let fixed = document.querySelector(".fixed");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    fixed.classList.add("shadow-lg");
  } else {
    fixed.classList.remove("shadow-lg");
  }
});
// Toggle dark mode
document.getElementById("default-toggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
