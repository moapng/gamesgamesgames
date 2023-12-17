/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			mobile: '300px',
			pad: '640px',
			desktop: '1024px',
			lgdesktop: '1600px'
		},
		colors: {
			blockdoku: '#00CEFF',
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
					primary: '#00CEFF',
					'primary-focus': '#00CEFF50',
					'primary-content': '#1b1c22',

					secondary: '#4DE26E',
					'secondary-focus': '#4DE26E50',
					'secondary-content': '#1b1c22',

					accent: '#aea0ee',
					'accent-focus': '#8c7bdb',
					'accent-content': '#1b1c22',

					neutral: '#17101e',
					'neutral-focus': '#1b1c22',
					'neutral-content': '#ffffb3',

					'base-100': '#362321',
					'base-200': '#22212c',
					'base-300': '#1b1c22',
					'base-content': '#ffffb3',

					info: '#5db4df',
					success: '#009476',
					warning: '#f0b960',
					error: '#c05535',

					'--rounded-box': '0',
					'--rounded-btn': '0',
					'--rounded-badge': '0',

					'--animation-btn': '.25s',
					'--animation-input': '.2s',

					'--btn-text-case': 'uppercase',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px',

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
