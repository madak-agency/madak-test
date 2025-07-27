gsap.from(".cta-button", {
    y: "2rem",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-button",
      start: "top 80%", // when top of button hits 80% of viewport height
      toggleActions: "play none none none"
    }
  });
