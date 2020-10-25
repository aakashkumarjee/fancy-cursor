let mouseCursor = document.querySelector('.cursor')
let links = document.querySelectorAll('.nav-links')
let logo = document.querySelector('.logo')
let image = document.querySelector('.image')

window.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        mouseCursor.classList.add('hovered-cursor');
        link.style.color = "white";
    })
    link.addEventListener('mouseleave', (e) => {
        mouseCursor.classList.remove('hovered-cursor');
        link.style.color = "black";
    })
})
logo.addEventListener('mouseenter', (e) => {
    mouseCursor.classList.add('hovered-cursor');
    logo.style.color = "white";
})
logo.addEventListener('mouseleave', (e) => {
    mouseCursor.classList.remove('hovered-cursor');
    logo.style.color = "black";
})
image.addEventListener('mouseenter', (e) => {
    mouseCursor.classList.add('hovered-cursor');
    mouseCursor.style.background = "none"
})
image.addEventListener('mouseleave', (e) => {
    mouseCursor.classList.remove('hovered-cursor');
    mouseCursor.style.background = "black"
})