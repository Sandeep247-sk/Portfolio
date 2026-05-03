const loginPage = document.getElementById('loginPage');
const appPage = document.getElementById('appPage');
const loginBtn = document.getElementById('loginBtn');
const passwordInput = document.getElementById('passwordInput');
const loginMsg = document.getElementById('loginMsg');

const SECRET_PASSWORD = "sandeep123";

// Show login on reload
loginPage.style.display = "flex";
appPage.style.display = "none";

loginBtn.addEventListener('click', () => {
    const input = passwordInput.value.trim();
    if (input === SECRET_PASSWORD) {
        loginPage.style.display = "none";
        appPage.style.display = "flex";
        loginMsg.style.display = "none";
        passwordInput.value = "";
    } else {
        loginMsg.style.display = "block";
    }
});

// Link Card Creator
const linkInput = document.getElementById('linkInput');
const imageInput = document.getElementById('imageInput');
const createBtn = document.getElementById('createBtn');
const cardContainer = document.getElementById('cardContainer');

createBtn.addEventListener('click', () => {
    const link = linkInput.value.trim();
    const file = imageInput.files[0];

    if (!link || !file) {
        alert("Please enter a link and select an image.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${e.target.result}" alt="Website Image">
            <button onclick="window.open('${link}', '_blank')">Visit Website</button>
        `;

        cardContainer.appendChild(card);
    };
    reader.readAsDataURL(file);

    linkInput.value = "";
    imageInput.value = "";
});
