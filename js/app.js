/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */

const sections = [...document.querySelectorAll('section')]
const ul = document.querySelector('ul')
const fragment = new DocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

for (let section of sections) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = section.dataset.nav
    a.classList.add('menu__link')
    a.addEventListener('click', function () {
        // Scroll to section on link click
        section.scrollIntoView({
            block: 'start',
            inline: 'start',
            behavior: 'smooth'
        })
        for (let section of sections) {
            section.classList.remove('your-active-class')
        }
        // Set sections as active
        section.classList.add('your-active-class')
    })
    // Build menu 
    li.appendChild(a)
    fragment.append(li)
}
// add to ul
ul.appendChild(fragment)


/**
 * End Main Functions
 * Begin Events
 * 
 */


// Add class 'active' to section when near top of viewport
function scrollActive() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop >= 0 && sectionTop <= 400) {
            section.classList.add('your-active-class')
        } else {
            section.classList.remove('your-active-class')
        }
    })
}

window.addEventListener('scroll', scrollActive)

