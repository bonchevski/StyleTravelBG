const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'script', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
            {rel: 'stylesheet', src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'}
        ],
        script: [
            {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', type: 'text/javascript'},
            {src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', type: 'text/javascript' },
            {src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', type: 'text/javascript'}
        ],

    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#FFFFFF'},

    /*
    ** Global CSS
    */
    css: [
        // this line include bootstrap.css in each html file on generate
        'bootstrap/dist/css/bootstrap.css',

    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~plugins/modal.js'
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
