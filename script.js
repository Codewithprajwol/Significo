function homepageanimation()
{
    gsap.set(".slidesm",{scale:5})
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:2,
    }
})
tl.to(".videodiv",{
    '--clip':"0%",
    ease: Power2,   
},'a')

tl.to(".slidesm",{
    scale:1,
    ease:Power2

},'a')
tl.to(".lft",{
   xPercent:-10,
   ease:Power4,
   stagger:.03
},'b')
tl.to(".rgt",{
   xPercent:10,
   ease:Power4,
   stagger:.03
},'b')

}
function slideanimation(){

    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".slide-main",
            start:"top top",
            end:"bottom bottom",
            // markers:true,
            scrub:2,
        },
        xPercent:-200,
        // duration:4,
        ease:Power4
    })
}
function teamanimation(){
    document.querySelectorAll(".listelem").forEach(function(e){
        e.addEventListener("mousemove",function(dets){
            gsap.to(this.querySelector(".imager"),{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),
            ease:Power4,
            duration:.4
          })
          gsap.to(this.querySelector(".blue-layer"),{
            height:"100%",
            ease:Power4
          })
        })
        e.addEventListener("mouseleave",function(dets){
            gsap.to(this.querySelector(".imager"),{
                opacity:0,
              })
              gsap.to(this.querySelector(".blue-layer"),{
                height:"0%",
                ease:Power4
              })
        })
    })
}
function scrolling(){
    var clutter="";
document.querySelector(".texty-para").textContent.split("").forEach(function(e){
    if(e === " ") clutter +=`<span>&nbsp;</span>`
  clutter +=`<span>${e}</span>`
})
document.querySelector(".texty-para").innerHTML=clutter;
gsap.set(".texty-para span",{opacity:.1})
gsap.to(".texty-para span",{
    scrollTrigger:{
        trigger:".para",
        start:"-30% top",
        end:"120% 60%",
        // markers:true,
        scrub:1
    },
    opacity:1,
    stagger:1,
    ease:Power4,
    duration:3
})
}
function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsules(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 80%",
            end:"120% bottom",
            scrub:2,
            // markers:true
        },
        y:0,
        ease:Power4
    })
}
function colorchanger(){
    document.querySelectorAll(".section").forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            end:"bottom 50%",
            // markers:true,
            onEnter: function(){
                document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color);
    
            }
    
        })
    })
}
loco();
homepageanimation();
slideanimation();
teamanimation();
scrolling();
capsules();
colorchanger();


