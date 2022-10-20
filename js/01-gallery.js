import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", openModal);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

function getImageIndex(image) {
  return galleryItems.indexOf(
    galleryItems.find((imageObj) => imageObj.preview === image)
  );
}

function openModal(event) {
  event.preventDefault();
  const index = getImageIndex(event.target.src);

  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${galleryItems[index].original}">
	`
    )
    .show();
}
