import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const createItemEl = (acc, { preview, original, description }) =>
  acc +
  `<li class = 'gallery__item'><a class = 'gallery__link' href = ${original}><img class = 'gallery__image' src = ${preview} alt = ${description}/></a></li>`;

const createItemsList = galleryItems.reduce(createItemEl, '');

galleryRef.insertAdjacentHTML('beforeend', createItemsList);

const lightbox = new SimpleLightbox('.gallery__item a', {
  sourceAttr: 'href',
  overlay: true,
  nav: true,
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
