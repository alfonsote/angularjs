module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
<<<<<<< HEAD
				src: ['src/resources/js/**/*.js'],
				dest: 'src/<%= pkg.name %>.js'
=======
				src: ['src/resources/js/binding.js'],
				dest: 'src/resources/js/<%= pkg.name %>.js'
>>>>>>> f98824c0d1a152dba134a4ff5f4ba7685116724f
			},
			deps: {
				src: [
					'bower_components/modernizr/modernizr.js',
<<<<<<< HEAD
					'bower_components/jquery/dist/jquery.js',
					'bower_components/bootstrap/dist/js/bootstrap.js',
=======
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/bootstrap/dist/js/bootstrap.min.js',
>>>>>>> f98824c0d1a152dba134a4ff5f4ba7685116724f
					'bower_components/angularjs/angular.min.js',
				],
				dest: 'src/<%= pkg.name %>-deps.js'
			},
			css: {
				src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
						'src/resources/css/styles.css'
				],
				dest: 'src/resources/css/<%= pkg.name %>.css'
			},
			move: {
				src: ['bower_components/angularjs/angular.min.js.map'],
				dest: 'src/angular.min.js.map'
			}
		},

		sass: {
			dev: {
				files: {
					'src/resources/css/styles.css': 'src/resources/css/styles.scss'
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/resources/js/**/*.js'],
				tasks: ['concat:dist']
			},
			styles: {
				files: ['src/resources/css/*.scss'],
				tasks: ['sass']
			}
		}
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ngdocs');

	//tasks
	grunt.registerTask('default', 'Default Task Alias', ['build']);

	grunt.registerTask('build', 'Build the application', 
		['sass:dev',
		'concat'
		]);
}