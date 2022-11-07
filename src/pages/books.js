import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
			<button>
				<Link to='/add'>Add a book</Link>
			</button>
			{books.map((book) => (
				<div className='book' key={book.id}>
					{/* book image */}
					{book.cover && <img src={book.cover} alt='' />}
					<h2>{book.title}</h2>
					<p>{book.desc}</p>
					<p>{book.price}</p>
				</div>
			))}
			<button>
				<Link to='/add'>Add a book</Link>
			</button>
		</>
	);
};

export default Books;
