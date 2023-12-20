/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			blockdoku: '#88d498',
			wordle: '#c2aaca'
		}
	},
	daisyui: {
		themes: [
			{
				'': {
					primary: '#ededed',
					'primary-focus': '#fff',
					'primary-content': '#141414',

					secondary: '#ededed',
					'secondary-focus': '#fff',
					'secondary-content': '#141414',

					accent: '#ededed',
					'accent-focus': '#ffffff',
					'accent-content': '#141414',

					neutral: '#4f4f4f',
					'neutral-focus': '#141414',
					'neutral-content': '#ffffff',

					'base-100': '#141414',
					'base-200': '#141414',
					'base-300': '#141414',
					'base-content': '#ffffff',

					info: '#353588',
					success: '#1c541c',
					warning: '#c9a10d',
					error: '#a92323',

					'--rounded-box': '0',
					'--rounded-btn': '0',
					'--rounded-badge': '0',

					'--animation-btn': '0',
					'--animation-input': '0',

					'--btn-text-case': 'lowercase',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px',

					h1: { 'font-family': 'Norwester' }
				},

				blockdoku: {
					primary: '#88d498',
					'primary-focus': '#4c945c',
					'primary-content': '#02553c',

					secondary: '#1a936f',
					'secondary-focus': '#02553c',
					'secondary-content': '#b1e2d4',

					accent: '#1e6f8a',
					'accent-focus': '#114b5f',
					'accent-content': '#aad9e9',

					neutral: '#171618',
					'neutral-focus': '#2e2d2f',
					'neutral-content': '#98c9a3',

					'base-100': '#1f1f1f',
					'base-200': '#171618',
					'base-300': '#2e2d2f',
					'base-content': '#bad8c1',

					info: '#66c7ff',
					success: '#87cf3a',
					warning: '#e1d460',
					error: '#ff6b6b',

					'--rounded-box': '0',
					'--rounded-btn': '0',
					'--rounded-badge': '0',

					'--animation-btn': '.25s',
					'--animation-input': '.2s',

					'--btn-text-case': 'lowercase',
					'--navbar-padding': '1rem',
					'--border-btn': '2px',

					'h2, p': { 'font-family': 'pixelifysans' }
				},
				wordle: {
					primary: '#c2aaca',
					'primary-focus': '#9e84a9',
					'primary-content': '#000000',

					secondary: '#e2abb3',
					'secondary-focus': '#d78e98',
					'secondary-content': '#ffffff',

					accent: '#a3d7c4',
					'accent-focus': '#79c3a8',
					'accent-content': '#ffffff',

					neutral: '#71abc6',
					'neutral-focus': '#4b96b9',
					'neutral-content': '#ffffff',

					'base-100': '#f1eaea',
					'base-200': '#e7dfdf',
					'base-300': '#d8cfcf',
					'base-content': '#554e4e',

					info: '#1c92f2',
					success: '#009485',
					warning: '#ff9900',
					error: '#ff5724',

					'--rounded-box': '2rem',
					'--rounded-btn': '2.5rem',
					'--rounded-badge': '2.5rem',

					'--animation-btn': '.25s',
					'--animation-input': '.2s',

					'--btn-text-case': 'lowercase',
					'--navbar-padding': '.75rem',
					'--border-btn': '5px',

					'h2, p': { 'font-family': 'vonique92' }
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
