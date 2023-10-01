// Function to create and append a gallery block
function createGalleryBlock(imageNumber) {
    const galleryRow = document.getElementById('gallery-row');

    const colDiv = document.createElement('div');
    colDiv.classList.add('col-lg-4', 'col-md-6');

    const galleryBlock = document.createElement('div');
    galleryBlock.classList.add('gallery-block', 'gallery-overlay');

    const galleryImage = document.createElement('div');
    galleryImage.classList.add('gallery-block_image');
    const img = document.createElement('img');
    img.src = `assets/images/main/${imageNumber}.jpeg`;
    img.alt = '';

    galleryImage.appendChild(img);

    const overlayBox = document.createElement('div');
    overlayBox.classList.add('overlay-box');

    const overlayInner = document.createElement('div');
    overlayInner.classList.add('overlay-inner');

    const content = document.createElement('div');
    content.classList.add('content');

    const link = document.createElement('a');
    link.href = `assets/images/main/${imageNumber}.jpeg`;
    link.classList.add('lightbox-image', 'link');
    link.setAttribute('data-fancybox', 'gallery');

    const span = document.createElement('span');
    span.classList.add('icon', 'fal', 'fa-plus');

    link.appendChild(span);
    content.appendChild(link);
    overlayInner.appendChild(content);
    overlayBox.appendChild(overlayInner);
    galleryBlock.appendChild(galleryImage);
    galleryBlock.appendChild(overlayBox);
    colDiv.appendChild(galleryBlock);
    galleryRow.appendChild(colDiv);
}

// Determine the last available image (e.g., by checking if the image exists)
let lastImageNumber = 1;

function checkImageExists(imageNumber) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = `assets/images/main/${imageNumber}.jpeg`;

        image.onload = () => {
            resolve(true);
        };

        image.onerror = () => {
            resolve(false);
        };
    });
}

(async function() {
    while (await checkImageExists(lastImageNumber + 1)) {
        lastImageNumber++;
    }

    // Generate gallery blocks for images from 1 to lastImageNumber
    for (let i = 1; i <= lastImageNumber; i++) {
        createGalleryBlock(i);
    }
})();
