// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);





const galleryContainer = document.querySelector('.gallery')
const cardMarkup = ceateCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardMarkup );

function ceateCardsMarkup(galleryItems) {
  return galleryItems
  .map(({preview, description, original}) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>

 
</div>
     
    `
  })
  .join('')
  
}


let gallery = new SimpleLightbox('.gallery a', { 
  
  captionsData : "alt" ,
  captionDelay: 250,
  enableKeyboard: true
   });
