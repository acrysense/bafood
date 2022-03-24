document.addEventListener('DOMContentLoaded', function () {
    // inputmask
    Inputmask().mask(document.querySelectorAll('input'))

    // height 100vh fix for IOS
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // popup
    const popupBtn = document.querySelector('.popup-btn')
    const popup = document.getElementById('popup')
    const popupClose = document.querySelector('.popup__close')
    const popupOverlay = document.querySelector('.popup__overlay')

    if (popupBtn && popup) {
        popupBtn.addEventListener('click', (event) => {
            event.preventDefault()

            popup.classList.add('popup--active')
            document.body.classList.add('scroll-disabled')
        })
    }

    if (popupClose && popup) {
        popupClose.addEventListener('click', (event) => {
            event.preventDefault()

            popup.classList.remove('popup--active')
            document.body.classList.remove('scroll-disabled')
        })
    }

    if (popupOverlay && popup) {
        popupOverlay.addEventListener('click', (event) => {
            event.preventDefault()

            popup.classList.remove('popup--active')
            document.body.classList.remove('scroll-disabled')
        })
    }
});