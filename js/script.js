
const tabheader = document.querySelectorAll(".tabheader__item")
const tabcontent = document.querySelectorAll(".tabcontent")



let images = {
    fitnes: "./img/tabs/vegy.jpg",
    premium: "./img/tabs/elite.jpg",
    post: "./img/tabs/post.jpg"
}


tabheader.forEach((item, i) => {
    item.addEventListener('click', () => {
        tabheader.forEach(el => {
            el.classList.remove("active")
            
        })
        tabcontent.forEach(b => {
             b.classList.add("hide", "fade")
        })

        tabcontent[i].classList.remove("hide")
        item.classList.add("active")
       
    })
})


const openModal = document.querySelectorAll("[data-modal]")
const modalForm = document.querySelector(".modal")
const closeModal = document.querySelector("[data-close]")
const close = document.getElementById("close")



openModal.forEach(openBtn => {
    modal(openBtn)
})

function modal(openBtn) {
openBtn.addEventListener('click', () => {
        
        modalForm.classList.add("show", "fade")
    })
    closeModal.addEventListener('click', () => {
        modalForm.classList.remove("show")
    })
    close.addEventListener('click', () => {
        modalForm.classList.remove("show")
    })
}

const slides = document.querySelectorAll(".offer__slide")
const prev = document.querySelector(".offer__slider-prev")
const next = document.querySelector(".offer__slider-next")
const current = document.querySelector("#current")
const total = document.querySelector("#total")

let index = 0


current.textContent = index + 1

function showSlide(i) {
slides.forEach(slide => {
    slide.classList.remove("show")
})

    slides[i].classList.add("show", "fade")
total.textContent = String(slides.length).padStart(2, "0")
    current.textContent = String(i + 1).padStart(2, "0")
}

showSlide(index)

next.onclick = () => {
    index = (index + 1) % slides.length
    showSlide(index)
}
prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length
    showSlide(index)
}


const genderBtns = document.querySelectorAll("#gender .calculating__choose-item")

const activityBtns = document.querySelectorAll("#activity.calculating__choose-item")

const inputs = document.querySelectorAll("input.calculating__choose-item")

const calculating__result = document.querySelector(".calculating__result span")

let userData = {
    gender: "woman",
    height: 0,
    weight: 0,
    age: 0,
    activity: 0


}





genderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        genderBtns.forEach(el => el.classList.remove("calculating__choose-item_active"))
        btn.classList.add("calculating__choose-item_active")
        userData.gender = btn.getAttribute("data-gender")
        calcKkal(userData)

    })

})
activityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        activityBtns.forEach(el => el.classList.remove("calculating__choose-item_active"))
        
        btn.classList.add("calculating__choose-item_active")
        
        userData.activity = btn.getAttribute("data-activity")
        calcKkal(userData)

    })

})


inputs.forEach(inp => {
    inp.oninput = () => {
        userData[inp.id] = inp.value





    }
})



function calcKkal(data) {
    let result = 0

    if (userData.gender === "woman") {
        result = 655.1 + (9.563 * data.weight) + (1.85 * data.height) - (4.676 * data.age)
    } else {
        result = 66.5 + (13.75 * data.weight) + (5.003 * data.height) - (6.775 * data.age)
    }

    result = Math.round(result * data.activity)

    calculating__result.textContent = result

    return result


}


const deadline = "2025-06-29 18:20"



function getTimer(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date)
    const days = Math.floor(t / 1000 / 60 / 60 / 24)
    const hours = Math.floor(t / 1000 / 60 / 60 % 24)
    const minutes = Math.floor(t / 1000 / 60 % 60)
    const seconds = Math.floor(t / 1000 % 60)

    return { t, days, hours, minutes, seconds }

}

function setTimer(endTime) {
    const days = document.querySelector("#days")
    const hours = document.querySelector("#hours")
    const minutes = document.querySelector("#minutes")
    const seconds = document.querySelector("#seconds")


    function updateTimer() {
        
const t = getTimer(endTime)


days.textContent = String(t.days).padStart(2, "0")
hours.textContent = String(t.hours).padStart(2, "0")
minutes.textContent = String(t.minutes).padStart(2, "0")
seconds.textContent = String(t.seconds).padStart(2, "0")
if (t.t < 0) {
            clearInterval(interval)
            days.textContent = "0".padStart(2, "0")
hours.textContent = "0".padStart(2, "0")
minutes.textContent = "0".padStart(2, "0")
seconds.textContent = "0".padStart(2, "0")
fireworks.start()
setTimeout(() => {
    fireworks.stop()
}, 7000);
        }


    }

    let interval = setInterval(updateTimer, 1000)

}

setTimer(deadline)

console.log(getTimer(deadline));


const container = document.getElementById('fireworks-container')
  const fireworks = new Fireworks.default(container, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    trace: 3,
    explosion: 5,
  })
  


