const text = "Aspiring MERN Stack Developer with a passion for web development and real-world problem-solving.";
const typewriterElement = document.getElementById("typewriter");

let i = 0;
function typeWriter() {
  if (i < text.length) {
    typewriterElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40); // typing speed
  }
}

window.onload = typeWriter;

const faders = document.querySelectorAll('.animate-fade');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if(entry.isIntersecting){
  entry.target.classList.add('visible');
  observer.unobserve(entry.target);
}
});
}, {
threshold: 0.1
});

faders.forEach(fader => {
appearOnScroll.observe(fader);
});

document.getElementById("githubIcon").addEventListener("click", function () {
window.open("https://github.com/SUJI-26", "_blank");
});

document.getElementById("linkedinIcon").addEventListener("click", function () {
window.open("http://www.linkedin.com/in/vsuji", "_blank");
});