// Gruntfile.js

module.exports = (grunt) => {
    grunt.initConfig({
        execute: {
            target: {
                src: ['promise.js']
            }
        },
        watch: {
            scripts: {
                files: ['promise.js'],
                tasks: ['execute'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');
};
