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


