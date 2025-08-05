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
    title.style.marginTop = '25px';
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
    Step into a cozy tropical haven, where soft lights glow like stardust and every plate is a blessing from the skies.`

    container.appendChild(description);

    const headerMustTry = document.createElement('h3');
    headerMustTry.textContent = "Must-Try Divine Creations";
    headerMustTry.style.marginTop = '35px';
    container.appendChild(headerMustTry);

    // Foods
    const listContainer = document.createElement('ul');
    const listOfItems = {
        "Ambrosia Adobo": "The classic Filipino favorite, slow-cooked in celestial spices and bathed in honeyed garlic oil",
        "Mana Kare-Kare": "A thick peanut stew fit for the divine, served with enchanted eggplants and golden bagoong",
        "Nectar of the Isles": "A refreshing tropical drink said to grant bliss to those who sip it"
    };

    for (const key in listOfItems) {
        const food = document.createElement('li') 
        food.style.margin= "8px auto";
        food.textContent = `${key} - ${listOfItems[key]}`;
        listContainer.appendChild(food);
    }
    container.appendChild(listContainer);

    // Italic
    const italicContainer = document.createElement('div');
    italicContainer.style.textAlign = 'center';
    italicContainer.style.marginTop = '35px';
    const italicMeseage = document.createElement('i');
    italicMeseage.textContent = "Whether it’s a feast or a quiet escape, you deserve a table in the halls of gods.";
    italicContainer.appendChild(italicMeseage);
    container.appendChild(italicContainer);


}