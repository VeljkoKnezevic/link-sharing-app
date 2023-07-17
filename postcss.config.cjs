/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
module.exports = {
  plugins: [
    require("postcss-import"),
    // Comment out postcss-nested if you're using tailwindcss/nesting
    require("postcss-nested"),
    require("tailwindcss")("tailwind.config.cjs"),
    require("postcss-preset-env", {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
        "nesting-rules": false,
      },
    }),
    require("autoprefixer")(),
    require("postcss-reporter"),
  ],
};