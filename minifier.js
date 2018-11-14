var minifier = require('minifier')
var input =  ['./js/holidayEvaluator.js']

minifier.on('error', function(err) {
	console.log('error!')
})

minifier.minify(input, {output:'./js/bundle.min.js'})