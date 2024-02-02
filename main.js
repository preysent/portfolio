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

// window.addEventListener("mousemove",(e)=>{
//     const x = e.clientX/1- window.innerWidth/2
//     const y = e.clientY/window.innerHeight*1.5 

//     ob.style.transform=`translate3d(${-x}px,0,0) rotate(15deg) scale(${y})`
//     console.log(y)
// })

