module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      js : {
        files : {
          '_js/funcoes.js' : [ 'js/funcoes.js' ]
        }
      }
    }, // uglify
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'stylesheets/_css/general.css': ['stylesheets/css/general.css']
        }
      }
    }, //cssmin
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index_prod.html': 'index.html',
          'formulario_prod.html': 'formulario.html'
        }
      }
    } //htmlmin
  });

    // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'cssmin', 'htmlmin' ] );

};