import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const handleNav =(e)=>{
    console.log("clicked ")
    const el = document.getElementById((e.target.innerText.toLowerCase()))
    scroll.scrollTo(el)
}
document.querySelector('nav').addEventListener('click',handleNav)

const ob = document.querySelector('#hero-obj')

const line1 = document.querySelector('.line-1')