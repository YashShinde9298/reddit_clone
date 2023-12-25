const themeToggler = document.querySelector(".theme-toggler");
let appPopup = document.getElementById('appPopup');
const main = document.querySelector('main');
const loginPopup = document.getElementById('loginPopup');
const username = document.getElementById('username');
const password = document.getElementById('password');

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


function openAppPopup() {
    appPopup.classList.add("open-appPopup");
    main.classList.add("blur-filter");
    loginPopup.classList.remove('open-loginPopup');
}

function closeAppPopup() {
    appPopup.classList.remove("open-appPopup");
    main.classList.remove("blur-filter");
}

function openLogin() {
    loginPopup.classList.add('open-loginPopup');
    main.classList.add("blur-filter");
    appPopup.classList.remove("open-appPopup");
}

function closeLogin() {
    loginPopup.classList.remove('open-loginPopup');
    main.classList.remove("blur-filter");
}

function login() {
    username.value = '';
    password.value = '';
    loginPopup.classList.remove('open-loginPopup');
    main.classList.remove("blur-filter");
}