module.exports = function(grunt) {
  grunt.initConfig({
    // CSS
    stylus: {
      compile: {
        options: {
          urlfunc: 'embedurl'
        },
        files: [{
          expand: true,
          cwd: 'css/stylus',
          src: ['*.styl'],
          dest: 'css',
          ext: '.css',
        }]
      }
    },
    sass: {
      compile: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'css/scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css',
        }]
      }
    },
    less: {
      compile: {
        options: {
          compress: true,
          cleancss: true
        },
        files: [{
          expand: true,
          cwd: 'css/less',
          src: ['*.less'],
          dest: 'css',
          ext: '.css',
        }]
      }
    },
    compass: {
      options: {
        debugInfo: false,
        imagesDir: 'img',
        raw: [
          'http_path = "/"',
          'Sass::Script::Number.precision = 8',
          'sass_options = {',
          '  :read_cache => true,',
          '}'
        ].join("\n"),
        sassDir: 'css/scss'
      },
      compile: {
        options: {
          cssDir: 'css',
          environment: 'development',
          force: true,
          noLineComments: false,
          outputStyle: 'expanded',
          raw: [
            'sass_options = {',
            '  :sourcemap => true',
            '}'
          ].join("\n"),
          sourcemap: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-bless');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', []);

};
