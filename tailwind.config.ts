import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E82561',
          dark: '#C30E59',
        },
        accent: {
          orange: '#F2AE66',
          cream: '#E8E7AB',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
