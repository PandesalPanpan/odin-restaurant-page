import ambrosiaFile from "./ambrosia.jpg";
import karekareFile from "./kare-kare.jpg";
import sinigangFile from "./sinigang.jpg";
import nectarFile from "./nectar.jpg";
import meadshakeFile from "./meadshake.jpg";
import thunderfruitFile from "./thunderfruit.jpg";

export default function loadMenuPage(container) {
    container.innerHTML = ``;

    // Title "Feast of the Divine"
    const title = document.createElement('h1');
    title.textContent = "Feast of the Divine";
    title.style.marginTop = "25px";
    title.style.textAlign = "center";
    container.appendChild(title);


    // Mains Items 3 Per row with images
    // header for mains
    const mainsTitle = document.createElement('h2');
    mainsTitle.marginTop = "35px";
    mainsTitle.textAlign = "center";
    mainsTitle.textContent = "Mains";
    container.appendChild(mainsTitle);

    // Create the styling for grid for 3 items
    const mainsGridContainer = document.createElement('div');
    mainsGridContainer.style.display = "grid";
    mainsGridContainer.style.gridTemplateColumns = "repeat(3, 1fr)"; 
    mainsGridContainer.style.gap = "20px";
    mainsGridContainer.style.margin = "20px auto";
    container.appendChild(mainsGridContainer);

    const ambrosiaImage = document.createElement("img");
    ambrosiaImage.src = ambrosiaFile;
    mainsGridContainer.appendChild(ambrosiaImage);
    
    const karekareImage = document.createElement("img");
    karekareImage.src = karekareFile;
    mainsGridContainer.appendChild(karekareImage);

    const sinigangImage = document.createElement("img");
    sinigangImage.src = sinigangFile;
    mainsGridContainer.appendChild(sinigangImage);
    
    // Drinks 3 per row with images

    const drinksTitle = document.createElement('h2');
    drinksTitle.marginTop = "35px";
    drinksTitle.textAlign = "center";
    drinksTitle.textContent = "Drinks";
    container.appendChild(drinksTitle);

    const drinksContainer = document.createElement('div');
    drinksContainer.style.display = "grid";
    drinksContainer.style.gridTemplateColumns = "repeat(3, 1fr)"; 
    drinksContainer.style.gap = "20px";
    drinksContainer.style.margin = "20px auto";
    container.appendChild(drinksContainer);

    // Add 3 drink images
    // Nectar
    const nectarImage = document.createElement('img');
    nectarImage.src = nectarFile;
    nectarImage.style.width = '250px';
    nectarImage.style.height = '250px';
    drinksContainer.appendChild(nectarImage);

    // Meadshake
    const meadshakeImage = document.createElement('img');
    meadshakeImage.src = meadshakeFile;
    meadshakeImage.style.width = '250px';
    meadshakeImage.style.height = '250px';
    drinksContainer.appendChild(meadshakeImage);

    // Thunderfruit
    const thunderfruitImage = document.createElement('img');
    thunderfruitImage.src = thunderfruitFile;
    drinksContainer.appendChild(thunderfruitImage);
}

function addCardStyle(elementContainer, image, content) {
    elementContainer.style.

    return;
}