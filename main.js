
let menu = document.querySelector('.nav-menu')
let nav = document.querySelector('header > nav > ul')

menu.addEventListener('click', () => {
    nav.classList.toggle('active')
    if(nav.classList.contains('active')){
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-circle-xmark')
    }else{
        menu.classList.remove('fa-circle-xmark')
        menu.classList.add('fa-bars');
    }
})

//
gsap.registerPlugin(ScrollTrigger);

let main_tl = gsap.timeline({defaults: { ease: 'power4.inOut'}, scrollTrigger: {
    trigger:"header",
    toggleActions:"play none none reset"
}})

main_tl.from('nav', {y: -100, opacity: 0, duration: 1.5, delay: 1})
.from('.home-info', {x: -100, opacity: 0, duration: 1.5}, '-=1')
.from('.home-img', {opacity: 0, duration: 1.5}, '-=1.5')
.from('.home-details', {x: 100, opacity: 0, duration: 1.5},"-=1.5")

let price_tl = gsap.timeline({defaults: {duration: 1.5, ease: "power4.inOut"}, scrollTrigger: {
    trigger: ".pricing",
    toggleActions: "play none none reset"
}})

price_tl.from(".pricing > h2", {y: -100, opacity: 0}, "-=1.5")
.from('.pricing > p', {opacity: 0, y: -100}, "-=1")
.from('.price-options', {opacity: 0, y: -100, stagger: .2}, "-=1")

let kursorx = new kursor({
    type: 2,
    removeDefaultCursor: true,
    color: '#e80ac1'
})
//setup load screen
main_tl.pause();

window.addEventListener('load', () => {
    gsap.timeline().to('#preloader', {yPercent: -100, duration: 1, delay: 1});
    setTimeout(() => {
        main_tl.paused(false)
    }, 2000)
})
