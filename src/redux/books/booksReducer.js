import {
	FETCH_BOOKS_FAILURE,
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_SUCCESS,
	SORT_BOOKS_BY_AUTHOR,
	SORT_BOOKS_BY_YEAR,
} from "./booksTypes";

const initialState = {
	booksList: [],
	isFetching: false,
	error: "",
};

const booksReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BOOKS_REQUEST:
			return {
				...state,
				isFetching: true,
				error: "",
			};
		case FETCH_BOOKS_SUCCESS:
			return {
				...state,
				booksList: action.payload.docs,
				isFetching: false,
			};
		case FETCH_BOOKS_FAILURE:
			return {
				...state,
				error: action.payload,
				isFetching: false,
			};
			case SORT_BOOKS_BY_AUTHOR:
				return {
					...state,
					booksList: action.payload
				}
				case SORT_BOOKS_BY_YEAR:
				return {
					...state,
					booksList: action.payload
				}
		default:
			return state;
	}
};

export default booksReducer;
