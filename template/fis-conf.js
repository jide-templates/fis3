fis.set('project.ignore', [
		'.git/**',
		'node_modules/**',
		'output/**',
		'.gitignore',
		'package.json',
		'fis-conf.js'
	])

// 
fis
	.match('src/css/(**)', {
		parser: 'stylus',
		rExt: '.css',
		release: '/css/$1'
	})
	.match('src/images/(**)', {
		release: '/images/$1'
	})
	.match('src/js/(**)', {
		parser: fis.plugin('babel-5.x'),
		release: '/js/$1'
	})
	.match('src/lib/(**)', {
		release: '/lib/$1'
	})
	.match('src/font/(**)', {
		release: '/font/$1'
	})
	.match('src/view/(**.pug)', {
		parser: fis.plugin('pug', {pretty: true}),
		rExt: '.html',
		release: '/view/$1'
	})

// production
fis
	.media('prod')
	.match('!*.pug', {
		domain: 'cdn-domain/'
	})
	.match('*.styl', {
		useHash: true,
		preprocessor: fis.plugin('autoprefixer', {
			'browsers': ['last 2 versions', 'iOS 7']
		}),
		optimizer: fis.plugin('clean-css')
	})
	.match('*.js', {
		useHash: true,
		optimizer: fis.plugin('uglify-js')
	})
	.match('*.png', {
		optimizer: fis.plugin('png-compressor', {
	      type : 'pngquant'
	    })
	})
