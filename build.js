const rollup  = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const babel   = require('rollup-plugin-babel')
const glob    = require('glob')

glob('src/**/*.js', (err, files) => {
    files.forEach((file) => {
        const name = file.split('/').pop().slice(0, -3)
        rollup.rollup({
            input: file
        }).then(bundle => {
            bundle.write({ format: 'es', dest: `dist/${ name }.es.js` })
        })
        .catch(error => {
            console.error(error)
        })
    })
})