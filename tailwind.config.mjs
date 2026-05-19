import tailwindcss from "@tailwindcss/vite";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground:  "var(--foreground)",
				"foreground-dull": "var(--foreground-dull)",
				"foreground-strong": "var(--foreground-strong)",
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
