var typed=new Typed(".text" , {
    strings:["Frontend Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.addEventListener("DOMContentLoaded", function () {
  const skillSection = document.querySelector(".skills");
  const progressBars = document.querySelectorAll(".progress-bar");
  const circles = document.querySelectorAll(".circle");
  const percentages = document.querySelectorAll(".circle-percentage");

  const options = {
    root: null,
    threshold: 0.5, // Activate when 50% visible
  };

  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animate Progress Bars
        progressBars.forEach((bar) => {
          let width = bar.getAttribute("data-percent");
          bar.style.width = width + "%";
          bar.style.transition = "width 1.5s ease-in-out";
        });

        // Animate Circular Skills
        circles.forEach((circle, index) => {
          let percentage = circle.getAttribute("data-percent");
          let degree = (percentage / 100) * 360;

          setTimeout(() => {
            circle.style.background = `conic-gradient(cyan ${degree}deg, #333 ${degree}deg)`;
            circle.style.transition = "background 1.5s ease-in-out";
          }, 200);

          let count = 0;
          let target = parseInt(percentage);
          let interval = setInterval(() => {
            if (count < target) {
              count++;
              percentages[index].innerText = count + "%";
            } else {
              clearInterval(interval);
            }
          }, 15);
        });

        observer.unobserve(skillSection);
      }
    });
  }, options);

  skillObserver.observe(skillSection);
});
