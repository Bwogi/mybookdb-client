import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './students.scss';

const Students = () => {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		const fetchAllStudents = async () => {
			try {
				const res = await axios.get('http://localhost:8900/students');
				// console.log(res);
				setStudents(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAllStudents();
	}, []);

	return (
		<div>
			<div className='students'>
				{students.map((student) => (
					<div className='student'>
						<p>
							<span>Student ID: </span>
							{student.idstudents}
						</p>
						<p>
							<span>Name: </span>
							{student.fname} {student.lname}
						</p>
						<p>
							<span>Gender: </span>
							{student.gender}
						</p>
						<p>
							<span>Program ID: </span>
							{student.progid}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Students;
