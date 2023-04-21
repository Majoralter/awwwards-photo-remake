gsap.registerPlugin(ScrollTrigger)

const imagesLeft = gsap.utils.toArray(".img-left")
const imagesRight = gsap.utils.toArray(".img-right")

imagesLeft.forEach(image => {
    gsap.to(image, {
    x: -600,
    duration: 8,
    scrollTrigger: {
        trigger: image,
        start: "top 85%",
        end: "bottom top",
        scrub: true,
    }
})
})

imagesRight.forEach(image =>{
    gsap.to(image, {
    x: 600,
    duration: 8,
    scrollTrigger: {
        trigger: image,
        start: "top 85%",
        end: "bottom top",
        scrub: true,
    }
})
})