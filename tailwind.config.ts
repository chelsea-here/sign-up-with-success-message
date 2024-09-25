import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        darkSlateGray: "hsl(234, 29%, 20%)",
        darkNavy: "#242742",
        charcoalGray: "hsl(235, 18%, 26%)",
        gray: "rgba(25, 24, 43, 0.25)",
        white: "hsl(0, 0%, 100%)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        vermellion: "#FF6155",
      },
      boxShadow: {
        "3xl": "0px 16px 32px 0px #ff615580",
      },
      backgroundImage: {
        checkList: 'url("/icon-list.svg")',
      },
      backgroundPosition: {
        "bottom-1": "left bottom 2px",
      },
      content: {
        checkmark: 'url("/icon-list.svg")',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
export default config;
