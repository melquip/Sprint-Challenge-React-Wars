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
		font-family: sans-serif;
		background-image: url(${image});
		background-size: cover;
	}
	.header {
		text-align: center;
		h1 {
			padding: 50px 0 25px;
			color: blueviolet
		}
		input {
			appearance: none;
			text-align: center;
			width: 30px;
		}
	}
`;