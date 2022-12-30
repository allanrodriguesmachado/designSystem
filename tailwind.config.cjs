/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
    ],
    theme: {
        fontSize: {
            xs: 14,
            sm: 16,
            md: 18,
            lg: 20,
            xl: 24,
            xxl: 32,
        },
        colors: {
            'transparent': 'transparent',
            'gray-100': '#7C7C8A',
            'gray-900': '#202024',
            'blue-200': '#455A64',
            'blue-500': '#263238',
            'white': '#FFFFFF',
            'white-100': '#E0E0E0',
            'black': '#000000',
            'red': '#FF725E',
            'red-100': '#D25A49'
        },
        extend: {
            fontFamily: {
                sans: 'Inter, sans-serif',
            }
        },
    },
    plugins: [],
}
