import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortBooksByAuthor, sortBooksByYear } from "../../redux/books/booksActions";
import { fetchBooks } from "../../redux/books/booksAsyncActions";
import "./Search.scss";

const Search = () => {
	const [book, setBook] = useState("");
	const booksList = useSelector(state => state?.booksList);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setBook(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(fetchBooks(book.toLowerCase().replace(/\s/g, "+")));
		setBook("");
	};

    const sortByYear = (a, b) => {
        const date1 = a.publish_year?.[0] || Infinity;
		const date2 = b.publish_year?.[0] || Infinity;

		if (date1 < date2) {
			return -1;
		}
		if (date1 > date2) {
			return 1;
		}

		return 0;
    }

	const sortByAuthor = (a, b) => {
		return a.author_name?.[0]?.localeCompare?.(b.author_name?.[0]) || 0;
	};

    const handleSortBooksByAuthor = () => {
        dispatch(sortBooksByAuthor(booksList.sort(sortByAuthor)))
    }

    const handleSortBooksByYear = () => {
        dispatch(sortBooksByYear(booksList.sort(sortByYear)))
    }

	return (
		<div className="Search">
			<div className="Search__find-book-form__input">
				{/* <h3>Type book's title</h3> */}
				<form onSubmit={handleSubmit} className="Search__find-book-form">
					<input
						type="text"
						onChange={handleChange}
						value={book}
						placeholder="Type book's title here ..."
					/>
					<button className="Search__find-book-form find-book-btn button">
						FIND
					</button>
				</form>
			</div>
			<div className="Search__sort-books">
				<h4>Sort books by</h4>
				<button
					className="Search__sort-books by-author-btn button"
					onClick={handleSortBooksByAuthor}
				>
					AUTHOR
				</button>
				<button
					className="Search__sort-books by-year-btn button"
					onClick={handleSortBooksByYear}
				>
					YEAR
				</button>
			</div>
		</div>
	);
};

export default Search;
