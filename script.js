function openCard() {
    let envelope = document.querySelector(".envelope");
    envelope.classList.toggle("open");
    startHearts();
    showRandomGreeting();
}

function startHearts() {
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
}

function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function showRandomGreeting() {
    const greetings = [
        "С 8 Марта, Дания! Пусть твоя жизнь будет полна радости и счастья! 💐",
        "Дания, с праздником! Пусть каждый день дарит тебе улыбки! 🌸",
        "С Международным женским днём, Дания! Будь самой счастливой! 💖",
        "Дания, ты прекрасна! Пусть 8 Марта принесёт тебе море радости! 🌷"
    ];
    
    let randomIndex = Math.floor(Math.random() * greetings.length);
    document.getElementById("greeting").textContent = greetings[randomIndex];
}

let youtubePlayer = document.getElementById("youtube-player");
let isPlaying = false;

document.getElementById("play-music").addEventListener("click", function () {
    if (!isPlaying) {
        youtubePlayer.src = "https://www.youtube.com/embed/3YBE6tDVT7w?autoplay=1";
        this.textContent = "Выключить музыку";
    } else {
        youtubePlayer.src = "";
        this.textContent = "Включить музыку";
    }
    isPlaying = !isPlaying;
});
