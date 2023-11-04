/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./layout/**/*.{js,ts,jsx,tsx,mdx}",
		"./page-components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				componentColor: "#202328",
			},
			backgroundColor: {
				darkBackgroundSecondary: "#131619",
				darkBackgroundPrimary: "#0D0F10",
			},
		},
	},
	plugins: [],
};
