import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Sampled from public/images/the-law-agent-wordmark.png - the crimson in the brackets,
        // #900E29, is the brand.
        //
        // Same two-tone problem the CFO site has, for the same reason: at 31% lightness this
        // crimson is legible on the light grounds and disappears against the near-black one. So
        // `brand` is the wordmark colour and `brand-tint` is the same hue lifted, which is what
        // the dark sections use.
        brand: {
          DEFAULT: "#900E29",
          dark: "#620A1C",
          tint: "#E07B90",
        },
        // The dark ground carries a trace of the brand hue rather than being neutral black, so
        // the crimson sits on something rather than beside it.
        ground: "#1C0B0E",
        cream: "#F4F1EF",
        ink: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
