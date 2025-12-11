/* TemplateMo 593 personal shape */
/* Updated for React compatibility */

document.addEventListener("DOMContentLoaded", () => {

  /*
  ============================
  MOBILE MENU FUNCTIONALITY
  ============================
  */
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow =
        mobileMenu.classList.contains("active") ? "hidden" : "auto";
    });

    // Close when clicking a link
    document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      mobileMenuToggle &&
      mobileMenu &&
      !mobileMenuToggle.contains(e.target) &&
      !mobileMenu.contains(e.target)
    ) {
      mobileMenuToggle.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });


  /*
  ============================
  NAVBAR SCROLL EFFECT
  ============================
  */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
  });


  /*
  ============================
  SCROLL ANIMATIONS
  ============================
  */
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animate");
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Portfolio staggered animation
  const portfolioObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".portfolio-item");
          items.forEach((item, index) => {
            setTimeout(() => item.classList.add("animate"), index * 150);
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  const portfolioSection = document.querySelector(".portfolio-grid");
  if (portfolioSection) portfolioObserver.observe(portfolioSection);


  /*
  ============================
  SMOOTH SCROLLING
  ============================
  */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });


  /*
  ============================
  CONTACT FORM SUBMISSION
  ============================
  */
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = document.querySelector(".submit-btn");
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;
      submitBtn.style.background =
        "linear-gradient(135deg, #94a3b8, #64748b)";

      setTimeout(() => {
        submitBtn.textContent = "Message Sent! ✓";
        submitBtn.style.background =
          "linear-gradient(135deg, #10b981, #059669)";
        submitBtn.style.transform = "scale(1.05)";

        setTimeout(() => {
          submitBtn.style.transform = "scale(1)";
        }, 200);

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = "";
          form.reset();
        }, 3000);
      }, 2000);
    });
  }


  /*
  ============================
  HERO PARALLAX EFFECT
  ============================
  */
  const hero = document.querySelector(".hero");
  let ticking = false;

  function updateParallax() {
    if (hero) {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      hero.style.transform = `translateY(${rate}px)`;
    }
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });


  /*
  ============================
  SKILL TAG HOVER EFFECT
  ============================
  */
  document.querySelectorAll(".skill-tag").forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      tag.style.transform = "translateY(-2px) scale(1.05)";
    });
    tag.addEventListener("mouseleave", () => {
      tag.style.transform = "translateY(0) scale(1)";
    });
  });


  /*
  ============================
  ESCAPE KEY TO CLOSE MOBILE MENU
  ============================
  */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu?.classList.contains("active")) {
      mobileMenuToggle.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

});
