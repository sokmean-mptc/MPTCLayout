import hcOffcanvasNav from 'hc-offcanvas-nav'
if ( document.getElementById("main-nav") )
document.addEventListener('DOMContentLoaded', function() {
    new hcOffcanvasNav('#main-nav', {
        disableAt: 992,
        customToggle: '.toggle-nav',
        insertClose: false,
        insertBack: false,
        position: 'right'
    })
})