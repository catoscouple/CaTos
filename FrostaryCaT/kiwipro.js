//peme//
const owo = document.getElementById("bear")
//script know bear now//
owo.addEventListener("click", () => {
    owo.style.animation = "owokiwiproOut 3s ease forwards"
    owo.style.pointerEvents = "none"
})

const button = document.getElementById("goBack").addEventListener("click", () => {
      window.location.href = "../index.html"
    });