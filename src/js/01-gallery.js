import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryDiv = document.querySelector('div.gallery');

const gallery = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
  )
  .join('');

galleryDiv.insertAdjacentHTML('afterbegin', gallery);

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captiondelay: 250,
});

console.log(galleryItems);

