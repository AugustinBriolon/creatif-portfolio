/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        btn: "#0000000d",
        black: '#111113',
        'black-light': '#18191b',
        // GREEN
        'green-light': '#e9f6ec',
        'green-dark': '#307f52',
        // RED
        'red-light': '#fceaf0',
        'red-dark': '#ba3263',
        // BLUE
        'blue-default': '#2F80EC',
        'blue-light': '#DBEAFE75',
        'blue-dark': '#415ac1',
      },
      backgroundImage: {
        'svgBg': "url('/background.svg')",
      },
      gap: {
        projects: "clamp(1.5rem, 1.02rem + 1.85vw, 2.5rem)"
      },
      cursor: {
        'link': "url('/icons/arrow-up.svg') 15 2, pointer;",
      }
    },
	},
	plugins: [],
}
