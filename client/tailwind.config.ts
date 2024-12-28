import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#5f3df7",
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            transitionTimingFunction: {
                DEFAULT: "ease-in-out",
            },
            transitionDuration: {
                DEFAULT: "350ms",
            },
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                ".flex-center-between": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                },
                ".flex-center-center": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
            });
        }),
    ],
} satisfies Config;
