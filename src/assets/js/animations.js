
// Animations 
const bgImg = document.querySelector(".bg-img-holder");
const textLine = document.querySelectorAll(".text-line");
const emblemLarge = document.querySelector(".emblem");

//features
const featuresContentTitle = document.querySelector(".features-content h3");
const featuresContentP = document.querySelector(".features-content p");

// Cards
const card = document.querySelectorAll(".grid-container .product-card");


const bgImgTL = gsap.timeline();

bgImgTL
.from(bgImg, 1, {
  duration: 1.4,
  scale: 1.2,
  ease: "expoScale(1, 1.2, power2.inOut)",
  opacity: 0
})
.from(textLine, {
  opacity: 0,
  delay: -0.2,
    y: 10,
    duration: 1.2,
    ease: "power4.out",
    stagger: {
      amount: 0.6
    }
  })
  .from(emblemLarge, 1, {
    delay: -0.4,
    scale: 0.7,
      duration: 1.6,
      opacity: 0,
      ease: "power3.out",
    });

    const featuresTl = gsap.timeline();

    featuresTl
      .from([featuresContentTitle, featuresContentP], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
        stagger: { 
          amount: 0.2
        }
      });



const cardsTl = gsap.timeline();

cardsTl
  .from(card, {
    delay: -0.4,
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 0.4
    }
  });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".trigger",
  triggerHook: 0,
  reverse: false
})
  .setTween(featuresTl)
  .addTo(controller);

