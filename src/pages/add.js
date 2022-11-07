import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
	const [book, setBook] = useState({
		title: '',
		desc: '',
		price: null,
		cover: '',
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		// whenever there is a change in the field, update or set the book variable with this new value
		setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	console.log(book);

	const handleClick = async (e) => {
		e.preventDefault();
		// we will use axios to send the data
		try {
			// book is the json object to be sent
			await axios.post('http://localhost:8800/books', book);
			// redirect to home page
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>Add a book</h1>
			<input
				type='text'
				placeholder='Book title...'
				onChange={handleChange}
				name='title'
			/>
			<input
				type='text'
				placeholder='Book description...'
				onChange={handleChange}
				name='desc'
			/>
			<input
				type='number'
				placeholder='Book price...'
				onChange={handleChange}
				name='price'
			/>
			<input
				type='text'
				placeholder='Book cover...'
				onChange={handleChange}
				name='cover'
			/>
			<button onClick={handleClick}>Add this book</button>
		</div>
	);
};

export default Add;
