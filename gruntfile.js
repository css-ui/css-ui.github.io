module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			target: {
				files: [
					{'www/css/cssui.min.css': [
						'node_modules/normalize.css/normalize.css',
						'node_modules/open-sans-fontface/open-sans.css',
						'node_modules/font-awesome/css/font-awesome.css',
						'node_modules/perfect-scrollbar/css/perfect-scrollbar.css',
						'node_modules/css-ui-simple/css/cssui.css',
						'node_modules/css-ui-responsive-menu/css/style.menu.css',
						'node_modules/css-ui-dropdown-menu/css/style.dropdown.css',
						'node_modules/css-ui-tooltip/css/style.tooltip.css',
						'node_modules/css-ui-tooltip/css/style.tooltip.theme.css',
						'node_modules/css-ui-table/css/style.tables.css',
						'node_modules/css-ui-modal-box/css/style.modal.box.css'
					]},
					{'www/css/cssui-menu-light.min.css': [
						'node_modules/css-ui-responsive-menu/css/style.menu.light.css'
					]},
					{'www/css/cssui-menu-dark.min.css': [
						'node_modules/css-ui-responsive-menu/css/style.menu.dark.css'
					]},
					{'www/css/cssui-dropdown-light.min.css': [
						'node_modules/css-ui-dropdown-menu/css/style.dropdown.light.css'
					]},
					{'www/css/cssui-dropdown-dark.min.css': [
						'node_modules/css-ui-dropdown-menu/css/style.dropdown.dark.css'
					]},
					{'www/css/cssui-login.min.css': [
						'node_modules/css-ui-sign-in/css/style.sign.in.css'
					]},
					{'www/css/cssui-dashboard.min.css': [
						'node_modules/css-ui-dashboard/css/style.dashboard.css'
					]}
				]
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'node_modules/font-awesome/fonts/', src: ['**'], dest: 'www/fonts/'},
					{expand: true, cwd: 'node_modules/open-sans-fontface/fonts/', src: ['**'], dest: 'www/css/fonts/'},
					{expand: true, cwd: 'node_modules/css-ui-sign-in/img/', src: ['**'], dest: 'www/img/'},
					{expand: true, cwd: 'node_modules/css-ui-dashboard/img/', src: ['**'], dest: 'www/img/'},
					{expand: true, flatten: true, src: ['node_modules/css-ui-dashboard/css/style.css'], dest: 'www/css', filter: 'isFile'}
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
						'node_modules/perfect-scrollbar/dist/perfect-scrollbar.js',
						'node_modules/nanobar/nanobar.js',
						'node_modules/css-ui-responsive-menu/js/responsive.menu.js',
						'node_modules/css-ui-dropdown-menu/js/dropdown.menu.js'
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
