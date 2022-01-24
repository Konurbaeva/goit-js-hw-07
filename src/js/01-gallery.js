import { galleryItems } from './gallery-items.js';

 const galleryEl = document.querySelector('.gallery');

// шаблон элемента галереи
const galleryItemsMarkup = item => {
  const { description, original, preview } = item;

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
</div>
  `;
};

const galleryInserted = galleryItems
  .map(galleryItemsMarkup)
  .join('');


const galleryHandler = (event) => {
  event.preventDefault();

  if(event.target.nodeName != 'IMG') return;

  const originalUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalUrl}">`)

    const basicLightBoxHander = function(event){
      if(event.key === "Escape"){
        instance.close();
      }
    }

    document.addEventListener('keydown', basicLightBoxHander);
    document.removeEventListener('keydown', basicLightBoxHander);

    instance.show();
}



galleryEl.insertAdjacentHTML('beforeend', galleryInserted);
galleryEl.addEventListener('click', galleryHandler);

