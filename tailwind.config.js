const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ['"Ubuntu"', ...defaultTheme.fontFamily.sans]
            },
        },
    },
    plugins: [],
}

