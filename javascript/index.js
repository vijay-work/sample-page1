const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle)
bsCollapse.hide();
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})


