import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchAllBooks = async () => {
			try {
				const res = await axios.get('http://localhost:8800/books');
				console.log(res);
				setBooks(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAllBooks();
	}, []);

	return (
		<>
			<h1>The Book Shop</h1>
			{books.map((book) => (
				<div>
					{/* book image */}
					{book.cover && <img src={book.cover} alt='' />}
					<h2>{book.title}</h2>
					<p>{book.desc}</p>
					<p>price</p>
				</div>
			))}
		</>
	);
};

export default Books;
