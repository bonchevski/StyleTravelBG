const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'script', src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
<<<<<<< HEAD
      { rel: 'script', src:'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'},
    ]
=======
      { rel: 'script', src:'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'}
    ],
    script: [
      { src: '/js/fb-sdk.js' }
     ]
 
>>>>>>> 192522ebe4d7413b3b3365009f90022e5ca6f8d3
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
      '@nuxtjs/font-awesome',
      'nuxt-fontawesome',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
};
