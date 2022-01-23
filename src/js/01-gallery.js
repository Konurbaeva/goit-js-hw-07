import { galleryItems } from './gallery-items.js';

/* const galleryEl = document.querySelector('.gallery');

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

   instance.show()

}



galleryEl.insertAdjacentHTML('beforeend', galleryInserted);
galleryEl.addEventListener('click', galleryHandler); */

const makeImageCard = ({description, original, preview}) =>{

  const imageClassEl = document.createElement('img');
  imageClassEl.classList.add('gallery__item')
  
  const descriptionEl = document.createElement('a');
  descriptionEl.classList.add('gallery__link');
  descriptionEl.textContent = description;
  
  
  const imageEl = document.createElement('gallery__image');
  imageEl.href = original;
  imageEl.dataset.source = original;
  
  imageClassEl.append(descriptionEl, imageEl);
  
  return imageClassEl;
  }

  const elements = galleryItems.map(makeImageCard);

  const galleryEl = document.querySelector('.gallery');
  
  const handler = (event) => {
    event.preventDefault();
  
    if(event.target.nodeName != 'IMG') return;
  
    const url = event.target.dataset.source;
  
    const instance = basicLightbox.create(`
      <img src="${url}">`)
  
     instance.show()
  
  }

  galleryEl.insertAdjacentHTML('beforeend', elements);
  galleryEl.addEventListener('click', handler);

  