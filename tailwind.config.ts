import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Read out of public/images/the-law-agent-wordmark.svg - the crimson the brackets are
        // filled with, #8E192A, is the brand. Taken from the vector rather than sampled off a
        // raster, so it is the exact value the logo uses and not a close neighbour.
        //
        // Same two-tone problem the CFO site has, for the same reason: at 33% lightness this
        // crimson is legible on the light grounds and disappears against the near-black one. So
        // `brand` is the wordmark colour and `brand-tint` is the same hue lifted, which is what
        // the dark sections use.
        brand: {
          DEFAULT: "#8E192A",
          dark: "#61111D",
          tint: "#E07B8A",
        },
        // The dark ground carries a trace of the brand hue rather than being neutral black, so
        // the crimson sits on something rather than beside it.
        ground: "#1C0B0D",
        cream: "#F4F1EF",
        ink: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
