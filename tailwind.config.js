module.exports = {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: "var(--background)",
		  foreground: "var(--text)",
		  card: "var(--card)",
		  primary: {
			DEFAULT: "var(--primary)",
			dark: "var(--primary-dark)",
		  },
		  border: "var(--border)",
		  muted: {
			DEFAULT: "var(--muted)",
			foreground: "var(--text-secondary)",
		  },
		  secondary: {
			DEFAULT: "#1e293b",
		  },
		},
		animation: {
		  gradient: 'gradient-shift 6s linear infinite',
		},
		backgroundSize: {
		  'auto': 'auto',
		  'cover': 'cover',
		  'contain': 'contain',
		  '200%': '200% 200%',
		},
	  },
	},
	plugins: [],
  };