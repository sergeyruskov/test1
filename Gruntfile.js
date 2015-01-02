'use strict';
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            styles: {
                files: ['style/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            scripts: {
                files: ['js/**/*.js'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['index.html'], // which files to watch
                options: {
                    livereload: true
                }
            }
        },
        less: {
            development: {
                files: {"style/style.css": "style/style.less"}
            },
            production: {
                files: {"style/style.css": "style/style.less"}
            }
        }
        //htmlmin: {                                     // Task
        //    dist: {                                      // Target
        //        options: {                                 // Target options
        //            removeComments: true,
        //            collapseWhitespace: true
        //        },
        //        files: {                                   // Dictionary of files
        //            '../index.html': 'index.html'
        //        }
        //    }
        //}
    });

    //grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', /*'htmlmin',*/ 'watch']);

};
