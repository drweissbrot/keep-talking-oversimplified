const mix = require('laravel-mix')

mix.stylus('stylus/app.styl', 'public/css/app.css')
.js('js/app.js', 'public/js/app.js')
.js('js/solver.js', 'public/js/solver.js')
