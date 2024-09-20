const API_URLS = [
    "https://api.thecatapi.com/v1/images/search", // Cat api
    "https://api.thedogapi.com/v1/images/search", // Dog api
];

async function getRandomImageUrl() {
    const url = API_URLS[Math.floor(Math.random() * API_URLS.length)]

    const resp = await fetch(url, { method: "GET" });

    if (resp.ok) {
        const imageObject = await resp.json();
        return imageObject[0]["url"];
    }
}

function setRandomImage() {
    const petImageContainer = document.querySelector('#pet-image');

    getRandomImageUrl()
        .then(res => {
            if (res == null) {
                return;
            }

            petImageContainer.src = res;
        });
}

function main() {
    const newPetButton = document.querySelector('#pet-image');

    newPetButton.addEventListener('click', setRandomImage);
    window.addEventListener('keydown', (e) => {
        if (e.code == 'Space') {
            setRandomImage();
            e.preventDefault();
        }
    });

    setRandomImage();
}

window.onload = () => {
    main();
};

