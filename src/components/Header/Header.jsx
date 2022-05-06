import React from "react";
import bookSearchLogo from "../../books-search.png";
import Search from "../Search/Search";
import './Header.scss'

const Header = () => {
	return (
		<div className="Header">
			<div className="Header__wrapper">
				<div className="Header__wrapper__logo">
					<img src={bookSearchLogo} alt="books search logo" />
				</div>
				<div className="Header__wrapper__search">
					<Search />
				</div>
			</div>
		</div>
	);
};

export default Header;
