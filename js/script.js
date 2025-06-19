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

total.textContent = slides.length
current.textContent = index + 1

function showSlide(i) {
slides.forEach(slide => {
    slide.classList.remove("show")
})

    slides[i].classList.add("show")

    current.textContent = i + 1
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




