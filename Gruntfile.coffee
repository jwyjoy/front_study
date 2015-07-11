module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['connect', 'watch'])

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    watch:
        options:
            livereload: true
        htdocs:
            files: ['htdocs/*.html','htdocs/**/*.html', 'htdocs/**/*.js']

    connect:
      app:
        options:
            port: 9999
            base: 'htdocs'
            livereload: true
