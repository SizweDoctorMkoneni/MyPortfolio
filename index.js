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
});