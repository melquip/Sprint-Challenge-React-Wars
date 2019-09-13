import { createGlobalStyle } from 'styled-components';

import image from './sw-bg.jpg';
export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html, body {
		min-height: 100vh;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		background-image: url(${image});
		background-size: cover;
	}
`;