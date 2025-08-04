import "./styles.css";
import loadHomePage from "./home_page";
import loadMenuPage from "./menu_page";
import loadAboutPage from "./about_page";

/* 
Add Event listeners for each button
Depending on the button triggered
Run a different module that replaces the current current with a different one
*/

const buttons = document.querySelectorAll(".tab-button");
const content = document.querySelector('#content');

// Attach a listener to each and check if it contains a class or specific id
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const tabName = button.dataset.tab;
        console.log(`This the name: ${tabName}`);
        switchTab(tabName);
        // Trigger a function that switches them
    })
})

function switchTab(tab) {
    switch(tab) {
        case 'home':
            loadHomePage(content);
            break;
        case 'menu':
            loadMenuPage(content);
            break;
        case 'about':
            loadAboutPage(content);
            break;
        default:
            break;
    }
}



// Content container

loadHomePage(content);

