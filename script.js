const typingText = document.querySelector(".typing-text");

const text = `I’m a passionate Full Stack Web Developer, Ethical Hacker, and UI/UX Designer based in India.
With a strong command over HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and Python —
I build secure, scalable, and beautifully designed websites and apps.

Currently, I’m working on freelance projects and running a digital marketing agency.
I’m also an ethical hacking enthusiast and love helping people stay secure online.

My mission? To turn ideas into high-performing, user-friendly applications.`;

let index = 0;

function type() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 30);
  }
}

type();
