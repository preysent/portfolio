import LocomotiveScroll from 'locomotive-scroll';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



// const loco = () => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();


    const handleNav = (e) => {
        console.log("clicked ")
        const el = document.getElementById((e.target.innerText.toLowerCase()))
        locoScroll.scrollTo(el)
    }
    document.querySelector('nav').addEventListener('click', handleNav)

    document.querySelector('#go-home-btn').addEventListener('click', () => locoScroll.scrollTo(0))


// }; loco();

const load = gsap.timeline()
load.from(".loder-div", {
    delay:.7,
     yPercent:100,
     stagger:.1
    
    })
load.to("#loder",{
    delay:.7,
    duration:1,
    yPercent:-110,
    rotate:-5,
    xPercent:-10,
    opacity:0,

})
load.from('#home h2',{
    yPercent:100,
    stagger:.1
})
