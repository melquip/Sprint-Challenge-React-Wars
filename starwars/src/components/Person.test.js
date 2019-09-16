import React from 'react'
import Person from './Person';
import { render } from '@testing-library/react';

test('renders correcly', () => {
  const res = render(
    <Person data={{
		birth_year: "19BBY",
		eye_color: "blue",
		gender: "male",
		hair_color: "blond",
		height: "172",
		name: "Luke Skywalker",
	}}
	/>,
  )
  expect(res).toMatchSnapshot();
})