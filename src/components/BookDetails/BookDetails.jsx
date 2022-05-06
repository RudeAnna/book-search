import React from "react";
import "./BookDetails.scss";

const BookDetails = ({ book }) => {
	return (
		<div className="BookDetails">
			<h4>{book.title}</h4>
			<p>{book?.author_name?.[0]}</p>
			<p>{book?.publish_year?.[0]}</p>
		</div>
	);
};

export default BookDetails;
