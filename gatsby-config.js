module.exports = {
  siteMetadata: {
    title: 'Chicago Docs',
    description: 'Customizable Gatsby documentation theme for easy navigation, accessibility, and readability.',
    siteUrl: 'localhost:8000',
    siteLogo: 'chicago-docs-logo.png',
    siteLanguage: 'en',
    githubUrl: `https://www.github.com/kabartolo/gatsby-starter-chicago-docs/`,
  },
  plugins: [
    {
      resolve: '@kabartolo/gatsby-theme-chicago-docs',
      options: {
        mainMenu: [
          {
            name: 'Sample MDX Page',
            path: '/sample/',
          },
        ],
        sidebarMenus: [
          {
            name: '',
            dropdownLabel: 'Menu',
            items: [
              {
                slug: 'quick-start',
              },
              {
                slug: 'example-api-doc',
              },
              {
                name: 'Example Group of Posts',
                slug: 'group',
                isGroup: true,
              },
            ],
          },
        ],
      },
    },    
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chicago Docs Gatsby Theme',
        short_name: 'Chicago Docs',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#eee',
        display: 'standalone',
        icon: 'src/assets/chicago-docs-logo.png', // creates a favicon
      },
    },
    'gatsby-plugin-offline',
  ]
};
