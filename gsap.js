gsap.registerPlugin(ScrollTrigger)

const imagesLeft = gsap.utils.toArray(".img-left")
const imagesRight = gsap.utils.toArray(".img-right")

const tl = gsap.timeline()

imagesLeft.forEach(image => {
    tl.to(image, {
    x: -600,
    duration: 8,
    scrollTrigger: {
        trigger: image,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
        timeScale: 0.5,
    }
})
})

imagesRight.forEach(image =>{
    tl.to(image, {
    x: 600,
    duration: 8,
    scrollTrigger: {
        trigger: image,
        start: "top 85%",
        end: "bottom top",
        scrub: true,
        timeScale: 0.5,
    }
})
})

