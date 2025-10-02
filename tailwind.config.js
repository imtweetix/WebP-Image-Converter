/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef2ff',
                    500: '#4f46e5',
                    600: '#4338ca',
                    700: '#3730a3'
                }
            },
            animation: {
                'spin': 'spin 1s linear infinite',
            }
        },
    },
    plugins: [],
}