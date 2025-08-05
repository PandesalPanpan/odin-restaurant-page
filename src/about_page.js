export default function loadAboutPage(container) {
    container.innerHTML = ``;

    const title = document.createElement('h1');
    title.textContent = "About Page";
    title.style.marginTop = "25px";
    title.style.textAlign = "center";
    container.appendChild(title);

    const storySectionHeader = document.createElement('h2');
    storySectionHeader.textContent = "The Story of Odin Restaurant";
    storySectionHeader.style.margin = "15px auto";
    container.appendChild(storySectionHeader);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Since the dawn of time, or at least since humans first dreamed of flavor, Odin has watched over the sacred act of dining.Tired of ambrosia and bored with the blandness of Asgard’s feasts, he looked to Earth and found what the gods had long missed: the vibrant, soulful dishes of the Filipino islands. Thus was born Odin Restaurant, where every dish is a blend of divine invention and tropical tradition. Founded by Odin himself, our restaurant was built to honor the beauty of food as a sacred experience. Here, you are not just a guest, you are a god at our table."
    container.appendChild(paragraph);

    const valueSectionHeader = document.createElement('h2');
    valueSectionHeader.style.margin = "15px auto";
    valueSectionHeader.textContent = "Our Value";
    container.appendChild(valueSectionHeader);

    const valueParagraph = document.createElement('p');
    valueParagraph.textContent = "We believe in food that connects, across time, cultures, and even realms. Every dish is crafted with ";
    const spanContainer = document.createElement('span');
    const italicValueParagraph = document.createElement('i');
    italicValueParagraph.textContent = 'ancestral fire, tropical spirit and a dash of divine mischief.'
    valueParagraph.appendChild(spanContainer);
    spanContainer.appendChild(italicValueParagraph);
    container.appendChild(valueParagraph);

    const quoteContainer = document.createElement('div');
    quoteContainer.style.textAlign = 'center';
    quoteContainer.style.margin = '35px auto';
    const quote = document.createElement('strong');
    quote.textContent = "Come hungry. Leave immortal.";
    quoteContainer.appendChild(quote);
    container.appendChild(quoteContainer);


}