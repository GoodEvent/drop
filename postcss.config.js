module.exports = {
    // parser: 'sugarss',
    plugins: {
        // 'postcss-import': {},
        // 'postcss-preset-env': {},
        // 'cssnano': {},
        'autoprefixer': {},
        "postcss-px-to-viewport": {
            viewportWidth: 1920,
            viewportHeight: 1080,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false
        }
    }
}