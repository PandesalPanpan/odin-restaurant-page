import "./styles.css";
import loadHomePage from "./load_home_page";

// Content container
const content = document.querySelector('#content');

loadHomePage(content);

/* 
Add Event listeners for each button
Depending on the button triggered
Run a different module that replaces the current current with a different one
*/