(function () {
    window.setTimeout(e => {
        let target = document.querySelector('.main-container')
        let top = document.querySelector('.top-banner')
        top.style.zIndex = 0
        target.style.top = 0
        target.style.translation = 'all 0.5s'
    }, 100)
})();