module.exports = (ctx) => ({
    map: ctx.env === 'development' ? ctx.map : false,
    plugins: [
        require('postcss-custom-media')({
            importFrom: 'src/index.css'
        }),
        require('postcss-preset-env')({
            stage: 1
        })
    ]
})
