import { UnsplashApi } from './js/unsplashApi';

const unsplashApi = new UnsplashApi();

const refs = {
  form: document.querySelector('.js-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);

function onFormSubmit(e) {
  e.preventDefault();
  unsplashApi.page = 1;
  unsplashApi.searchQuery = e.currentTarget.elements.text.value;

  unsplashApi
    .fetchPhotos()
    .then(data => {
      const markUp = data.results.map(createMarkUp).join('');
      refs.gallery.innerHTML = markUp;
      lightGallery(document.getElementById('static-thumbnails'));
      refs.loadMoreBtn.classList.remove('is-hidden');
    })
    .catch(error => console.log(error));
}

function createMarkUp(object) {
  return `<a class="gallery__item" href="${object.urls.regular}">
		<img class="gallery__image" src="${object.urls.small}" alt="${object.alt_description}" />
			</a>`;
}

function onLoadMoreClick(e) {
  unsplashApi.page += 1;

  unsplashApi.fetchPhotos().then(data => {
    const markUp = data.results.map(createMarkUp).join('');
    refs.gallery.insertAdjacentHTML('beforeend', markUp);
    lightGallery(document.getElementById('static-thumbnails'));
  });
}
