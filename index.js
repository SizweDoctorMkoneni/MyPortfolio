/***************************************************
    Scroll to Top Button Functionality.
    This code adds a smooth scroll to the top of the
    page when the button is clicked.
****************************************************/
const scrollToTopBtn = document.querySelector(".scroll-to-top");

scrollToTopBtn.addEventListener('click', () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
});

/**************************************************** 
    Toggle Navigation Menu.
    This code toggles the visibility of the navigation
    menu when the hamburger icon is clicked.
******************************************************/
document.addEventListener('DOMContentLoaded', () => {
    const humburgerMenu = document.querySelector(".humburger-container");
    const navigation = document.querySelector(".nav-menu");

    // open navigation menu
    humburgerMenu.addEventListener('click', () => {
        humburgerMenu.classList.toggle("active");
        navigation.classList.toggle("active");
    });

    //close navigation menu when a link is clicked
    navigation.querySelectorAll('li a').forEach(item => {
        item.addEventListener('click', () => {
            humburgerMenu.classList.remove("active");
            navigation.classList.remove("active");
        });
    });

    // Close navigation when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navigation.contains(event.target);
        const isClickOnHamburger = humburgerMenu.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navigation.classList.contains('active')) {
            humburgerMenu.classList.remove("active");
            navigation.classList.remove("active");
        }
    });
});

/**************************************************** 
    Touch-enabled Carousel for Projects.
    This code adds swipe functionality to the project carousel
    on touch screen devices.
******************************************************/
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const slider = document.querySelector('.slider');
    const radios = document.querySelectorAll('.slider input[type="radio"]');
    let startX = 0;
    let currentIndex = 0;

    // Function to update slider position
    const updateSlider = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Find the initially checked radio
    radios.forEach((radio, index) => {
        if (radio.checked) {
            currentIndex = index;
        }
        // Listen for radio changes (e.g., from dots)
        radio.addEventListener('change', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Set initial position
    updateSlider();

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', (e) => {
        if (!startX) return;
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;
        const threshold = 50; // Minimum swipe distance

        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                // Swipe left, go to next
                currentIndex = (currentIndex + 1) % radios.length;
            } else {
                // Swipe right, go to prev
                currentIndex = (currentIndex - 1 + radios.length) % radios.length;
            }
            radios[currentIndex].checked = true;
            updateSlider();
        }
        startX = 0;
    });
});