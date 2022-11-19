export class UnsplashApi {
	#BASE_URL = `https://api.unsplash.com/search/photos?`;
	#API_KEY = `w3wlkYGXQYTxkNkO6eQu7VkYZMao_MgIKvQ_v3jcSvI`;
	constructor() {
		this.page = null;
		this.searchQuery = null;
	}

	fetchPhotos() {
		const searchParams = new URLSearchParams({
			query: this.searchQuery,
			page: this.page,
			per_page: 6,
			orientation: `landscape`,
			client_id: this.#API_KEY,
		});

		return fetch(this.#BASE_URL + searchParams).then((response) => {
			if (!response.ok) {
				throw new Error(response.status);
			}
			return response.json();
		});
	}
}
