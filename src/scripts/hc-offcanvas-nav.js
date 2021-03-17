import hcOffcanvasNav from 'hc-offcanvas-nav'

document.addEventListener('DOMContentLoaded', function() {
    new hcOffcanvasNav('#main-nav', {
        disableAt: 992,
        customToggle: '.toggle-nav',
        insertClose: false,
        insertBack: false
    })
})