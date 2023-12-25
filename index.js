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

function fetchData() {
    fetch('https://dummyapi.io/data/v1/post', {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'app-id': '6589295b844d7d66af764dcb'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            for (let i = 0; i < data.data.length; i++) {
                main.innerHTML +=
                    `<div class="post">
                        <div class="top">
                            <img src=${data.data[i].owner.picture} alt="img">
                            <p><b>r/${data.data[i].owner.firstName}  ${data.data[i].owner.lastName}</b></p>
                        </div>
                        <div class="info">
                            <p>${data.data[i].text}</p>
                            <img src="${data.data[i].image}" alt="img">
                        </div>
                        <div class="bottom">
                            <button><span class="material-symbols-sharp">favorite</span>${data.data[i].likes}</button>
                            <button><span class="material-symbols-sharp">chat_bubble</span>450</button>
                            <button><span class="material-symbols-sharp">send</span>Share</button>
                        </div>
                    </div>
                    <hr>`
            }
        })
        .catch(error => console.log(error));
}

fetchData();