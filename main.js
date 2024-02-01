import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const handleNav =(e)=>{
    const el = document.getElementById((e.target.innerText.toLowerCase()))
    scroll.scrollTo(el)
}
document.querySelector('nav').addEventListener('click',handleNav)
