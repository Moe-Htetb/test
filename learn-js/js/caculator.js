const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");
const btns = document.querySelectorAll(".btn");
const count = document.querySelector("#count");

btn.addEventListener("click", () => {
  nav.classList.toggle("translate-x-full");
});

btns.forEach((btn) => {
  btn.onclick = () => {
    btn.classList.toggle("bg-gray-300");
    const ss = document.querySelectorAll(".btn.bg-gray-300").length;
    count.innerText = ss;
    // console.log(ss);
  };
});
