import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			"hero-image": "/public/background.png"
  		
		},

  		colors: {
  			primary: "#26ADBA",
  			dark_blue: "#0E46A3",
  			text_color: "",
			jungle_green:"#47B091",
  			bg_primary: "#1A1A1A",
			pink_bold: "#f420e1"
  		},
		  fontFamily: {
			modak: ['Modak', 'serif'], // Replace 'YourFontName' with the one defined in @font-face
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
