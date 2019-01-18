module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			target: {
				files: [
					{'www/css/cssui-demo.min.css': [
						'node_modules/normalize.css/normalize.css',
						'node_modules/open-sans-fontface/open-sans.css',
						'node_modules/css-ui-simple/css/cssui.css',
						'style.css'
					]},
					{'www/css/css-ui-menu-demo.min.css': [
						'node_modules/normalize.css/normalize.css',
						'node_modules/perfect-scrollbar/css/perfect-scrollbar.css',
						'node_modules/font-awesome/css/font-awesome.css',
						'node_modules/open-sans-fontface/open-sans.css',
						'node_modules/css-ui-simple/css/cssui.css',
						'node_modules/css-ui-responsive-menu/css/style.menu.css'
					]},
					{'www/css/css-ui-menu-light.min.css': [
						'node_modules/css-ui-responsive-menu/css/style.menu.light.css'
					]},
					{'www/css/css-ui-menu-dark.min.css': [
						'node_modules/css-ui-responsive-menu/css/style.menu.dark.css'
					]}
				]
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'node_modules/font-awesome/fonts/', src: ['**'], dest: 'www/fonts/'},
					{expand: true, cwd: 'node_modules/open-sans-fontface/fonts/', src: ['**'], dest: 'www/css/fonts/'}
				]
			}
		},
		uglify: {
			options: {
				reserved: ['jQuery'],
				sourceMap: true,
				sourceMapName: 'www/js/main.map'
			},
			my_target: {
				files: {
					'www/js/main.min.js': [
					    'node_modules/jquery/dist/jquery.js',
					    'node_modules/perfect-scrollbar/dist/perfect-scrollbar.js'
					]
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('minify-all', ['cssmin', 'uglify', 'copy']);
};
