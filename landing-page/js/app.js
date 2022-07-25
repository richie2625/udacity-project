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
const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById("navbar__list");
let numberOfListItems = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItems() {
    for (section of sections) {
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute("id");
        listItems = document.createElement('li');
       listItems.innerHTML = `<a class = "menu__link" href= '#${sectionLink}'>${sectionName}</a>`;
       menu.appendChild(listItems);
   }

}
//determine if section in viewport
function sectionInViewPort (elem) {
    let sectionPosition = elem.getBoundingClientRect();
    return (sectionPosition.top >= 0);
}
//give the section in viewport a different appearance
function toggleActiceClass() {
    for (section of sections) {
        //if it's in viewport
        if (sectionInViewPort(section)){
            //check if it doesn't contain "your-active-class"
            if (!section.classList.contains('your-active-class')){
                //then add it
                section.classList.add('your-active-class');
            }
            }
            else {
                //if it's not in viewport remove it
                section.classList.remove('your-active-class');
            }
    }
}


/**
 * End Helper Functions
 * 
*/

// build the nav
createListItems();

// Add class 'active' to section when near top of viewport
document.addEventListener ("scroll" , toggleActiceClass);


