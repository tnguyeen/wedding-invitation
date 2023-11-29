import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export const rise = (el: HTMLDivElement) => {
  gsap.fromTo(
    el,
    { y: 100 },
    {
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    }
  )
}

export const appear = (el: HTMLDivElement) => {
  gsap.fromTo(
    el,
    { scale: 0 },
    {
      markers: true,
      scale: 1,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    }
  )
}
