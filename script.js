const wrapper = document.querySelector(".wrapper")
const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "យាយលេងសោះធ្លាក់មេនទែន🌚";
    gif .src="https://i.pinimg.com/originals/42/53/42/4253426e968c57f598bfa48eb3742d44.gif";
})

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.floor() * maxY)

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})