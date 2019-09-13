import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Person from './components/Person';

const People = styled.div`
	display: flex;
	flex-wrap: wrap;
	.person {
		width: 100%;
		max-width: 50%;
		flex-basis: 50%;
	}
`;

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [people, setPeople] = useState([]);
	const [page, setPage] = useState(1);
	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	useEffect(() => {/*
		axios.get(`https://swapi.co/api/people?page=${page}`)
		.then(response => {
			console.log(response);
			setPeople(response.data.results);
		})
		.catch(error => console.error(error))*/
		return () => {
			console.log('cleanup')
		}
	}, [page]);
	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
			<People>
			{
				people ? people.map(person => <Person data={person} key={person.url} />) : null
			}
			</People>
		</div>
	);
}

export default App;
