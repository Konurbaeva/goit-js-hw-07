import { galleryItems } from './gallery-items.js';

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');

const lightBoxMarkup = item => {
    const { description, original, preview } = item;
  
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
};


  
const lightBoxGalleryInserted = galleryItems
  .map(lightBoxMarkup)
  .join('');

  const handler = (event) => {
    event.preventDefault();
    //Инициализация библиотеки SimpleLightbox 
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
   
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); 
});
}
  
  
galleryEl.insertAdjacentHTML('beforeend', lightBoxGalleryInserted);
galleryEl.addEventListener('click', handler);
