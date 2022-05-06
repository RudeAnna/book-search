import React from "react";
import { useState } from "react";
import BookDetails from "../BookDetails/BookDetails";
import "./Book.scss";
import axios from "axios";
import { useEffect } from "react";
import blankCover from "../../blankCover.jpg";

const Book = ({ book }) => {
	const [bookCover, setBookCover] = useState();
	const [defaultCover, setDefaultCover] = useState(blankCover);

	const getBookCover = async (i) => {
		const coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn[i]}.jpg?default=false`;
		axios
			.get(coverUrl)
			.then(() => {
				setBookCover(coverUrl);
			})
			.catch((error) => {
				if (error.response.status === 404) {
					if (book?.isbn?.length - 1 > i) {
						getBookCover(i + 1);
					}
				}
			});
	};

	useEffect(() => {
		if (book?.isbn?.length) {
			getBookCover(0);
		}
	});

	return (
		<div className="Book">
			<div className="Book__container">
				{bookCover ? (
					<img src={bookCover} alt="book cover" />
				) : (
					<img src={defaultCover} alt="book cover" />
				)}
			</div>
			<BookDetails book={book} />
		</div>
	);
};

export default Book;
