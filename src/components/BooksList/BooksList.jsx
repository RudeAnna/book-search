import React from "react";
import { useSelector } from "react-redux";
import Book from "../Book/Book";
import "./BooksList.scss";
import { v4 as uuidv4 } from "uuid";
import Loader from "../Loader/Loader";

const BooksList = () => {
	const { booksList, isFetching, error } = useSelector((state) => state);

	if (isFetching) {
		return <Loader />;
	}

	if (error) {
		return <p className="error">{error}</p>;
	}

	return (
		<div className="BooksList">
			{booksList?.length ? (
				booksList.map((book) => <Book key={uuidv4()} book={book} />)
			) : (
				<p>There are no books to dish6lay</p>
			)}
		</div>
	);
};

export default BooksList;
