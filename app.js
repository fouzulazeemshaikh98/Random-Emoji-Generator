let emoji = [
    '.',
    ',',
    '/',
    '#',
    ')',
    '(',
    '*',
    '>',
    '<',
]

const abc = () => {
    const h = document.getElementById("h")
    h.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];
    h.classList.add("h1")
    h.style.transition = "0.5s ease-in-out"
}