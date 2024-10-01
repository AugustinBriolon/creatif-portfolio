/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        black: '#111113',
        'black-light': '#18191b',
        // GREEN
        'dark-green-light': '#6fd392',
        'dark-green-dark': '#1a2c24',
        'green-light': '#e9f6ec',
        'green-dark': '#307f52',
        // RED
        'dark-red-light': '#ff8fa8',
        'dark-red-dark': '#341726',
        'red-light': '#fceaf0',
        'red-dark': '#ba3263',
        // BLUE
        'blue-default': '#2F80EC',
        'dark-blue-light': '#a1b0ff',
        'dark-blue-dark': '#1b2448',
        'blue-light': '#DBEAFE75',
        'blue-dark': '#415ac1',
      },
    },
	},
	plugins: [],
}
