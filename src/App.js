import "./App.scss";
import BooksList from "./components/BooksList/BooksList";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className="container">
      <Header />
      <BooksList />
		</div>
	);
}

export default App;
