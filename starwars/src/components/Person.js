import React from 'react';

const Person = ({ data }) => {
	return (
		<div className="person">
			<h2>{data.name}</h2>
			<p><b>Height:</b> {data.height}</p>
			{
				data.hair_color !== 'n/a' && data.hair_color !== 'none' ? 
					<p><b>Hair Color:</b> {data.hair_color}</p> : null 
			}
			<p><b>Eye Color:</b> {data.eye_color}</p>
			<p><b>Birth Year:</b> {data.birth_year}</p>
			{
				data.gender !== 'n/a' && data.gender !== 'none' ? 
					<p><b>Gender:</b> {data.gender}</p> : null 
			}
		</div>
	)
}

export default Person;