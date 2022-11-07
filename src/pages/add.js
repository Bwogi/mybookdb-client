import React, { useState, useEffect } from 'react';

const Add = () => {
	const [book, setBook] = useState({
		title: '',
		desc: '',
		price: null,
		cover: '',
	});

	const changeHandler = (e) => {
		// whenever there is a change in the field, update or set the book variable with this new value
		setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	console.log(book);

	return (
		<div>
			<h1>Add a book</h1>
			<input
				type='text'
				placeholder='Book title...'
				onChange={changeHandler}
				name='title'
			/>
			<input
				type='text'
				placeholder='Book description...'
				onChange={changeHandler}
				name='desc'
			/>
			<input
				type='number'
				placeholder='Book price...'
				onChange={changeHandler}
				name='price'
			/>
			<input
				type='text'
				placeholder='Book cover...'
				onChange={changeHandler}
				name='cover'
			/>
		</div>
	);
};

export default Add;
