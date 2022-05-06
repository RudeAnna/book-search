import {
	FETCH_BOOKS_FAILURE,
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_SUCCESS,
	SORT_BOOKS_BY_AUTHOR,
	SORT_BOOKS_BY_YEAR,
} from "./booksTypes";

export const fetchBooksRequest = () => {
	return { type: FETCH_BOOKS_REQUEST };
};

export const fetchBooksSuccess = (books) => {
	return { type: FETCH_BOOKS_SUCCESS, payload: books };
};

export const fetchBooksFailure = (error) => {
	return { type: FETCH_BOOKS_FAILURE, payload: error };
};

export const sortBooksByAuthor = (books) => {
	return { type: SORT_BOOKS_BY_AUTHOR, payload: books }
}

export const sortBooksByYear = (books) => {
	return { type: SORT_BOOKS_BY_YEAR, payload: books }
}