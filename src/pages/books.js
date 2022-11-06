import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchAllBooks = async () => {
			try {
				const data = await axios.get('http://localhost:8800/books');
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAllBooks();
	}, []);

	return <div>the book list page</div>;
};

export default Books;
