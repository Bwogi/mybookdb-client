import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './books.scss';

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchAllBooks = async () => {
			try {
				const res = await axios.get('http://localhost:8900/books');
				// console.log(res);
				setBooks(res.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchAllBooks();
	}, []);

	return (
		<>
			<div className='books'>
				<h1>Glaydah's Book Store</h1>
				<div className='card'>
					{books.map((book) => (
						<div className='book' key={book.id}>
							{book.cover && <img src={book.cover} alt='' center />}
							<h2>{book.title}</h2>
							<p>{book.desc}</p>
							<div className='buttons'>
								<button className='update'>Update</button>
								<button className='delete'>Delete</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Books;
