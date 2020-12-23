// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Shopify Starter',
  siteUrl: 'https://gridsome-shopify.netlify.app/',
  siteDescription: 'PWA Headless ecommerce Gridsome Shopify starter',
  titleTemplate: '%s - Gridsome + Shopify',
  icon: {
    favicon: "./src/favicon.png",
    touchicon: "./src/favicon.png"
  },
  plugins: [
    'gridsome-plugin-robots',
    'gridsome-plugin-tailwindcss',
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://77603738d6947809f7359dca454abd51ec1b8057.hl-a.getshifter.co',
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
          title: 'Gridsome Shopify Starter',
          description: 'PWA Headless ecommerce Gridsome Shopify starter',// Optional
          startUrl: '/',
          display: 'standalone',
          gcm_sender_id: undefined,
          statusBarStyle: 'default',
          manifestPath: 'manifest.json',
          disableServiceWorker: true,
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
          shortName: 'Gridsome Shopify',
          themeColor: '#000000',
          lang: "en-US",
          backgroundColor: '#000000',
          icon: './src/favicon.png', // must be provided like 'src/favicon.png'
          msTileImage: 'Gridsome Shopify',
          msTileColor: '#000000'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/exclude-me'],
        config: {
          '/collections/*': {
            changefreq: 'daily',
            priority: 0.5
          },
          '/product/*': {
            changefreq: 'daily',
            priority: 0.5
          }
        }
      }
    },
    {
      use: 'gridsome-source-shopify',
      options: {
        storeName: 'sac2020',
        storefrontToken: '8f3df1caacdb54c897b10fec7bbd9f32'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: ''
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        flexsearch: {
          profile: 'match'
        },
        collections: [
          {
            typeName: 'ShopifyProduct',
            indexName: 'Product',
            fields: ['title', 'handle', 'description']
          },
          {
            typeName: 'ShopifyCollection',
            indexName: 'Collection',
            fields: ['title', 'handle', 'description']
          }
        ],
        searchFields: ['title', 'handle', 'tags']
      }
    }
  ],
  templates: {
    ShopifyProduct: [
      {
        path: '/product/:handle',
        component: './src/templates/Product.vue'
      }
    ],
    ShopifyCollection: [
      {
        path: '/collection/:handle',
        component: './src/templates/Collection.vue'
      }
    ],
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:id', //adds route for "post" post type (Optional)
    WordPressPostTag: '/tag/:slug', // adds route for "post_tag" post type (Optional)
    WordPressPage: [
      {
        path: (node) => {
          const url = new URL(node.link);
          return `${url.pathname}`
        }
      }
    ]
  },
  transformers: {
  },
}
