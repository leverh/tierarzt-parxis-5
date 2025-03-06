// Scroll to top
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {
        console.log("Scroll event fired. ScrollY:", window.scrollY);
        if (window.scrollY > 300) {
            console.log("Making button visible");
            scrollBtn.classList.add("visible");
        } else {
            console.log("Hiding button");
            scrollBtn.classList.remove("visible");
        }
    });

    scrollBtn.addEventListener("click", () => {
        console.log("Scroll button clicked");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});


// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});