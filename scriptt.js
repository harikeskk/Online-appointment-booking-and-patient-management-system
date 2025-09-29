// Detect scroll and add/remove the 'visible' class
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.About-details');
    const rect = aboutSection.getBoundingClientRect();
    
    // Check if the section is in the viewport
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        aboutSection.classList.add('visible');
    } else {
        aboutSection.classList.remove('visible');
    }
});


            // Sticky Header on Scroll
            window.addEventListener("scroll", function() {
                const header = document.querySelector("header");
                if (window.scrollY > 0) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            });

        document.addEventListener("DOMContentLoaded", function() {
            const menuIcon = document.querySelector(".menu-icon");
            const navMenu = document.querySelector(".nav-menu");
        
            menuIcon.addEventListener("click", () => {
                navMenu.classList.toggle("active");
            });
        });
        
        document.addEventListener("DOMContentLoaded", function() {
            // Hide preloader after loading
            setTimeout(() => {
                document.querySelector('.preloader').style.display = "none";
            }, 1500);
        
            // Smooth scrolling for nav links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener("click", function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute("href")).scrollIntoView({
                        behavior: "smooth"
                    });
                });
            });
        });
        // document.getElementById('contactForm').addEventListener('submit', function(event) {
        //     event.preventDefault();
            
        //     let name = document.getElementById('name').value;
        //     let email = document.getElementById('email').value;
        //     let message = document.getElementById('message').value;
        
        //     if(name && email && message) {
        //         alert('Thank you, ' + name + '! Your message has been sent.');
        //         this.reset();
        //     } else {
        //         alert('Please fill out all fields.');
        //     }
        // });
        
        // function animateCounters() {
        //     const counters = document.querySelectorAll(".counter");
    
        //     counters.forEach(counter => {
        //         let target = +counter.getAttribute("data-target");
        //         let current = 0;
        //         let increment = Math.ceil(target / 100);
    
        //         function updateCounter() {
        //             if (current < target) {
        //                 current += increment;
        //                 counter.innerText = formatNumber(Math.min(current, target));
        //                 setTimeout(updateCounter, 30);
        //             } else {
        //                 counter.innerText = formatNumber(target);
        //             }
        //         }
    
        //         counter.innerText = "0"; // Reset counter before animating
        //         updateCounter();
        //     });
        // }
    
        // function formatNumber(number) {
        //     return number.toLocaleString();
        // }
    
        // const observerOptions = {
        //     root: null,
        //     threshold: 0.5
        // };
    
        // const observer = new IntersectionObserver(entries => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             animateCounters();
        //         }
        //     });
        // }, observerOptions);
    
        // document.querySelectorAll(".counter").forEach(counter => observer.observe(counter));
    
        // document.addEventListener("DOMContentLoaded", function() {
        //     const counters = document.querySelectorAll(".counter");
        
        //     // Function to animate the counter
        //     function animateCounter(counter) {
        //         const target = +counter.getAttribute("data-target");
        //         let current = 0;
        //         const increment = target / 100; // Control speed of the counter
        
        //         function updateCounter() {
        //             if (current < target) {
        //                 current += increment;
        //                 counter.innerText = Math.floor(current);
        //                 requestAnimationFrame(updateCounter);
        //             } else {
        //                 counter.innerText = target;
        //             }
        //         }
        
        //         updateCounter();
        //         counter.classList.add("animate");
        //     }
        
        //     // Use Intersection Observer to trigger the animation when the section is in view
        //     const observer = new IntersectionObserver((entries) => {
        //         entries.forEach((entry) => {
        //             if (entry.isIntersecting) {
        //                 const counter = entry.target;
        //                 animateCounter(counter); // Start the animation when in view
        //                 observer.unobserve(counter); // Stop observing after animation starts
        //             }
        //         });
        //     }, { threshold: 0.5 }); // Start when 50% of the element is in view
        
        //     // Observe each counter element
        //     counters.forEach((counter) => {
        //         observer.observe(counter);
        //     });
        // });
        
        // document.addEventListener("DOMContentLoaded", function() {
        //     const counters = document.querySelectorAll(".counter");
        
        //     // Function to animate the counter
        //     function animateCounter(counter) {
        //         const target = +counter.getAttribute("data-target");
        //         let current = 0;
        //         const increment = target / 100; // Control speed of the counter
        
        //         function updateCounter() {
        //             if (current < target) {
        //                 current += increment;
        //                 counter.innerText = Math.floor(current);
        //                 requestAnimationFrame(updateCounter);
        //             } else {
        //                 counter.innerText = target;
        //             }
        //         }
        
        //         updateCounter();
        //         counter.classList.add("animate");
        //     }
        
        //     // Use Intersection Observer to trigger the animation when the section is in view
        //     const observer = new IntersectionObserver((entries) => {
        //         entries.forEach((entry) => {
        //             if (entry.isIntersecting) {
        //                 const counter = entry.target;
        //                 animateCounter(counter); // Start the animation when in view
        //                 observer.unobserve(counter); // Stop observing after animation starts
        //             }
        //         });
        //     }, { threshold: 0.5 }); // Start when 50% of the element is in view
        
        //     // Observe each counter element
        //     counters.forEach((counter) => {
        //         observer.observe(counter);
        //     });
        // });
        document.addEventListener("DOMContentLoaded", function() {
            const counters = document.querySelectorAll(".counter");
        
            // Function to animate the counter
            function animateCounter(counter) {
                const target = +counter.getAttribute("data-target");
                let current = 0;
                const increment = target / 100; // Control speed of the counter
        
                function updateCounter() {
                    if (current < target) {
                        current += increment;
                        counter.innerText = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                }
        
                updateCounter();
                counter.classList.add("animate");
            }
        
            // Scroll event to check if the counters are in the viewport
            window.addEventListener("scroll", function() {
                counters.forEach((counter) => {
                    const rect = counter.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= window.innerHeight * 0.75 && !counter.classList.contains("animate")) {
                        animateCounter(counter); // Trigger the counter animation
                    }
                });
            });
        });
        
   