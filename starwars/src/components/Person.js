import React from 'react';

const Person = ({data}) => {
	return (
		<div className="person">
			<h2>{data.name}</h2>
			<p>Height: {data.height}</p>
			<p>Hair Color: {data.hair_color}</p>
			<p>Eye Color: {data.eye_color}</p>
			<p>Birth Year: {data.birth_year}</p>
			<p>Gender: {data.gender}</p>
		</div>
	)
}

export default Person;