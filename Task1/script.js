const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // remove active class from all
        navLinks.forEach((link) => link.classList.remove("active"));

        // find matching link
        const activeLink = document.querySelector(
          `a[href="#${entry.target.id}"]`,
        );

        activeLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6,
  },
);

sections.forEach((section) => observer.observe(section));
