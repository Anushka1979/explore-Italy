var tl = gsap.timeline();

tl
.to("#loader",{
    // height:"0%",
    top:"100%",
    ease:Expo.easeInOut,
    duration:2,
    delay:1
})
.from("#leftnav,#mid1,#mid2,#mid3,#mid4,#bottomleft",{
    x:-100,
    opacity:0,
    stagger:1,
    duration:1,
    ease: Expo.ease
})
.from("#destination,#book,#gallery,#tour,#middleright",{
    x:100,
    opacity:0,
    stagger:1,
    duration:1,
    ease: Expo.ease
},'-=1')
