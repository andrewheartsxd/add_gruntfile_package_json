'use strict';

module.exports = function(grunt) {
  
  grunt.initConfig ({
    
    jshint: {
      dev: {
        options: {
          jshintrc: '.jshintrc',
        },
        src: ['Gruntfile.js', 'app.js', 'lib/*.js', 'test/*.js'] 
      }  
    },
    
    simplemocha: {
      all: {
        src: ['test/*.js']
      }
    },

    jscs: {
      all: {
        options: {
          config: ".jscsrc", 
        },
        files: {
          src: ['Gruntfile.js', 'app.js', 'lib/greet.js', 'test/testing.js']
        }
      }
    },

    watch: {
      files: ['Gruntfile.js', 'app.js', 'lib/*.js', 'test/*.js'],
      tasks: ['jshint:dev', 'simplemocha:all', 'jscs:all']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jscs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint:dev', 'simplemocha:all', 'jscs:all']);
  grunt.registerTask('default', ['test']);

};

