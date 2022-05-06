import {
	fetchBooksFailure,
	fetchBooksRequest,
	fetchBooksSuccess,
} from "./booksActions";
import axios from 'axios'

export const fetchBooks = (book) => {
	return (dispatch) => {
		const reqOptions = {
			method: "GET",
			url: `http://openlibrary.org/search.json?q=${book}`,
		};
		dispatch(fetchBooksRequest());
		return axios(reqOptions)
			.then((response) => {
				dispatch(fetchBooksSuccess(response.data));
			})
			.catch((error) => {
				const errorMessage = error.message;
				dispatch(fetchBooksFailure(errorMessage));
			});
	};
};


