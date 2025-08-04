/* 
    A function that replaces the current content of received document element
*/
export default function loadHomePage(container) {
    // Clears the content of the received container
    container.innerHTML = ``;

    // Break down the content into section
    // Title Section
    // Create an element for the title section
    const title = document.createElement('h1');
    title.style.textAlign = 'center';
    title.textContent = 'Welcome to Odin Restaurant';
    container.appendChild(title);

    const tagline = document.createElement('h3');
    tagline.style.textAlign = 'center';
    tagline.textContent = 'Dine Like the Gods';
    container.appendChild(tagline);
    // Content Section...

    
    // Description
    const description = document.createElement('div');
    description.style.marginTop = '35px';
    description.textContent = `Nestled in the heart of Valhalla, Odin Restaurant invites mortals and deities alike to indulge in a heavenly fusion of divine delights and Filipino flavors.
    Step into a cozy tropical haven, where soft lights glow like stardust and every plate is a blessing from the skies.`;

    container.appendChild(description);

}