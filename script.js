var timeline = gsap.timeline();

// Courbe Comete
gsap.to("#targetA", {
  duration: 15,
  motionPath: {
    path: "#comete",
    align: "#comete",
    autoRotate : true,
  },
  ease: Linear.easeNone,
  repeat: -1
});

gsap.to("#targetB", {
    duration: 15,
    motionPath: {
      path: "#terre",
      align: "#terre",
    },
    ease: Linear.easeNone,
    repeat: -1
  });

  gsap.to("#targetC", {
    duration: 1,
    motionPath: {
      path: "#soleil",
      align: "#soleil",
    },
    ease: Linear.easeNone,
    repeat: 0,
  });

  gsap.to("#targetD", {
    duration: 15,
    motionPath: {
      path: "#vaisseau",
      align: "#vaisseau",
    },
    ease: Linear.easeNone,
    repeat: -1,
  });