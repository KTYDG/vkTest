import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "25": "100px"
      },
      height: {
        "25": "100px"
      }
    },
  },
  plugins: [],
} satisfies Config;
