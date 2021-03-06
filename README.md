# Gatsby Theme Chicago Docs (Starter)

> For full documentation and a demonstration of this theme, see the <a href="https://kabartolo.github.io/chicago-docs-demo/">Chicago Docs Demo</a>.

The <a href="https://kabartolo.github.io/chicago-docs-demo/">Chicago Docs theme</a> for <a href="https://gatsbyjs.com">Gatsby</a> is a modern, professional docs site designed for open source projects. 

## Table of Contents

* [Installation](#installation)
* [Quick Config](#quick-config)
* [Menus](#menus)
* [Theme Options](#theme-options)
* [Creating Docs](#creating-docs)
* [Creating Pages](#creating-pages)

## Installation

### Start a new site

To install the **starter** and create a **new site**, run:

```
gatsby new your-site-name https://github.com/kabartolo/gatsby-starter-chicago-docs
```

If you just want the data without the components or styling, use the <a href="https://github.com/kabartolo/gatsby-starter-chicago-docs-core">**core starter**</a> to start a docs site from scratch:

```
gatsby new your-site-name https://github.com/kabartolo/gatsby-starter-chicago-docs-core
```

### Add to an existing site

To install just the <a href="https://github.com/kabartolo/gatsby-theme-chicago-docs">**theme**</a> to an **existing site**, run:

```
npm install @kabartolo/gatsby-theme-chicago-docs
```

To install just the <a href="https://github.com/kabartolo/gatsby-theme-chicago-docs-core">**core theme**</a> so you can style your docs from scratch, run:

```
npm install @kabartolo/gatsby-theme-chicago-docs-core
```

## Quick Config

The default configuration of `@kabartolo/gatsby-starter-chicago-docs` creates a site that looks and behaves like the <a href="https://kabartolo.github.io/chicago-docs-demo/">demo</a>. You'll just need to customize your site details in the `gatsby-config.js` file for your site. This creates the site metadata and configures the manifest file using <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/">`gatsby-plugin-manifest`</a>. It also adds a logo and favicon.

See <a href="https://kabartolo.github.io/chicago-docs-demo/docs/configuration/">Configuration</a> for a more in-depth guide on configuring your site.

### Metadata

This table gives the name of each metadata field, its type, whether it is optional or required, the default value, and a description.

| Name | Type | Info | Default | Description |
| --- | --- | --- | --- | --- |
| `title` | string | optional |  `''` (empty string) | Used to set the meta title tag for your site. Also appears in the browser tab and next to the logo in the header. |
| `description` | string | optional | `''` (empty string) | Used to set the meta description tag for your site. |
| `siteLanguage` | string | optional | `''` (empty string) | Used to set the meta language tag for your site. |
| `siteLogo` | string | optional | `''` (empty string) |  Filename for your logo, which should live in `src/assets` (or the `assetsPath` <a href="#theme-options">theme option</a>). This creates a logo that appears to the left of the site title with a fixed height of 30px. To customize the logo further, <a href="https://kabartolo.github.io/chicago-docs-demo/docs/styling-and-shadowing/#component-example">shadow</a> the Logo component in `@kabartolo/gatsby-theme-chicago-docs/src/components/Layout/Header/logo.js`. |
| `siteUrl` | string | optional | `''` (empty string) |  Used to set the canonical URL for your site. |
| `githubUrl` | string | optional | `''` (empty string) | Used to create a GitHub icon in the header that opens your GitHub project in a new tab. |

### Example

```js
module.exports = {
  siteMetadata: {
    title: 'The Full Title of Your Project',
    description: 'A brief description of your project and/or the site',
    siteLanguage: 'en',
    siteLogo: 'logo.png', // adds the logo to the site
    siteUrl: 'https://www.your-site.com',
    githubUrl: `https://www.github.com/repository/project-name/`,
  },
  plugins: [
    '@kabartolo/gatsby-theme-chicago-docs',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Full Title of Your Project',
        short_name: 'Shorter Title',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#eee',
        display: 'standalone',
        icon: 'src/assets/favicon.ico', // creates a favicon
      },
    },
  ],
}

```

## Menus

The main menu and the sidebar menus are defined in your site's `gatsby-config.js` file. For more information on creating these menus, see <a href="https://kabartolo.github.io/chicago-docs-demo/docs/configuration/menus">Configuration: Menus</a>.

This example shows how the main menu and sidebar menus are defined for the <a href="https://kabartolo.github.io/chicago-docs-demo/">demo</a> site:

```js {6,16}num
module.exports = {
  plugins: [
    {
      resolve: '@kabartolo/gatsby-theme-chicago-docs',
      options: {
         mainMenu: [
          {
            name: 'Documentation',
            path: '/docs/',
          },
          {
            name: 'Tutorials',
            path: '/tutorials/',
          },
        ],
        sidebarMenus: [
          {
            name: 'Documentation',
            slug: 'docs',
            items: [
              {
                slug: 'quick-start',
              },
              {
                name: 'Configuration',
                slug: 'configuration',
                isGroup: true,
                items: [
                  {
                    slug: 'site-options'
                  },
                  {
                    slug: 'menus',
                  },
                  {
                    slug: 'search-config',
                  },
                ],
              },
              // code omitted for brevity                 
            ],
          },
          {
            name: 'Tutorials',
            slug: 'tutorials',
            items: [
              {
                slug: 'tutorial1',
              },
            ],
          },
        ],
      },  
    },
  ],
}

```

If you specify `isGroup: true` for a list item, the item will appear as an accordion of posts from `src/docs/{slug}` (see <a href="#theme-options">theme options</a> to change where your docs live). 

If you omit the `items` list, all posts from the directory will be added automatically.

## Theme Options

Several options are available to customize your site's directory structure and how the site behaves. See <a href="https://kabartolo.github.io/chicago-docs-demo/docs/configuration/site-options/#theme-options">Configuration: Theme Options</a> for more details.

### Options

This table gives the name of each theme option, its type, whether it is optional or required, the default value, and a description.

| Name | Type | Info | Default | Description |
| --- | --- | --- | --- | --- |
| `assetsPath` | string | optional | `src/assets` | Directory for all assets used in your site. |
| `basePath` | string | optional | `''` (empty string) | Base path of your docs site, such as `/docs`. |
| `basePathLabel` | string | optional | `'Home'` | Label for base path in breadcrumb links. |
| `docsPath` | string | optional | `src/docs` |  Directory for all MDX docs for your site (i.e., MDX files that should use the Doc page component). |
| `pagesPath` | string | optional | `'src/mdxPages'` |  Directory for your site's pages (i.e., MDX files that should use the Page page component). |
| `mainMenu` | array of objects | optional | `[]` | List of menu items that will appear in the header (see <a href="https://kabartolo.github.io/chicago-docs-demo/docs/configuration/menus/#main-menu">Configuration: Main Menu</a>). |
| `sidebarMenus` | array of objects | optional | `[]` | List of menus that will appear in the sidebar of your site (see <a href="https://kabartolo.github.io/chicago-docs-demo/docs/configuration/menus/#sidebar-menu">Configuration: Sidebar Menu</a>). |
| `allowDocsSearch` | boolean | optional | `true` | Whether a search index is fully populated with MDX files from the `docsPath` folder. Set to `false` to use a different search strategy. |
| `alwaysShowBreadcrumb` | boolean | optional | `true` | Whether breadcrumb links are always displayed at the top of each doc. Can be overridden by the <a href="#frontmatter">`showBreadcrumb`</a> frontmatter field for an individual doc.|
| `alwaysShowPostNav` | boolean | optional | `true` | Whether to always show links to the previous and next docs at the bottom of a doc page. Can be overridden by the <a href="#frontmatter">`showPostNav`</a> frontmatter field for an individual doc. |
| `alwaysShowSidebar` | boolean | optional | `true` | Whether to always show the sidebar for docs. Can be overridden by the <a href="#frontmatter">`showSidebar`</a> frontmatter field for an individual doc. |
| `alwaysShowTOC` | boolean | optional | `true` | Whether to always show the table of contents (TOC component) for each doc. Can be overridden by the <a href="#frontmatter">`showTOC`</a> frontmatter field for an individual doc. |
| `primaryResultsOnly` | boolean | optional | `false` | When searching, whether to show only only matches in the title, description, and/or header. If set to `false`, will also show paragraph matches. |
| `sidebarAllowMultipleOpen` | boolean | optional | `true` | Whether multiple accordion menus in the sidebar can be open at the same time. |
| `sidebarAllowTOC` | boolean | optional | `true` | Whether to show a dropdown table of contents for each doc in the sidebar. |
| `sidebarDepth` | number | optional | `3` | Total depth of nested accordions to display in the sidebar (including table of contents). |
| `skipMDXConfig` | boolean | optional | `false` | Whether to skip <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/">`gatsby-plugin-mdx`</a> configuration for the theme. |
| `toggleTheme` | boolean | optional | `true` | Whether a theme toggle button should be shown in the header. |

### Example

This example shows the theme options (except <a href="#menus">menus</a>) and their default values:

```js
module.exports = {
  plugins: [
    {
      resolve: '@kabartolo/gatsby-theme-chicago-docs',
      options: {
        assetsPath: 'src/assets',
        basePath: '/',
        basePathLabel: 'Home',
        docsPath: 'src/docs',
        pagesPath: 'src/mdxPages',
        sidebarDepth: 3,
        allowDocsSearch: true,
        alwaysShowBreadcrumb: true,
        alwaysShowPostNav: true,
        alwaysShowSidebar: true,
        alwaysShowTOC: true,
        primaryResultsOnly: false,
        sidebarAllowMultipleOpen: true,
        sidebarAllowTOC: true,
        skipMDXConfig: false,
        toggleTheme: true,
      }
    }
  ]
}

```

## Creating Docs

Docs are MDX files that are displayed using the Doc page component. Docs can be navigated in the sidebar. A doc includes breadcrumb links at the top of the doc page; these are based on the nesting of the post in the <a href="https://kabartolo.github.io/chicago-docs-demo/docs/menus/#sidebar-menu">sidebar menu</a> defined by you. The links to the previous and next docs at the bottom of the doc page are also determined by this sidebar menu.

A table of contents (using the TOC component) also appears for each doc.

You can customize how all docs appear using the appropriate <a href="#theme-options">theme option</a>, such as `alwaysShowTOC` (this option determines whether all docs show a table of contents). You can customize an individual doc using the corresponding <a href="https://kabartolo.github.io/chicago-docs-demo/docs/configuration/site-options/#frontmatter">frontmatter field</a>, such as `showTOC`.

### Frontmatter fields

This table gives the name of each frontmatter field, its type, whether it is optional or required, the default value, and a description.

See <a href="/docs/configuration/site-options/#frontmatter">Configuration: Frontmatter</a> for more details on the available frontmatter fields.

| Name | Type | Info | Default | Description |
| --- | --- | --- | --- | --- |
| `title` | string | optional | value of `shortTitle` or 'Untitled' | Title of the doc. Used in the meta title tag and appears at the top of the doc and in the browser tab. |
| `shortTitle` | string | optional | `''` (empty string) | Shorter title used in place of the `title` field in doc navigation (e.g., in the sidebar). |
| `description` | string | optional | `''` (empty string) | Description of the doc. Used in the search index and in the meta description tag for the page. |
| `showBreadcrumb` | boolean | optional | value of `alwaysShowBreadcrumb` | Whether the breadcrumb links appear at the top of this doc. |
| `showPostNav` | boolean | optional | value of `alwaysShowPostNav` | Whether links to the previous and next docs appear at the bottom of this doc. |
| `showSidebar` | boolean | optional | value of `alwaysShowSidebar` | Whether the sidebar should appear for this doc. |
| `showTOC` | boolean | optional | value of `alwaysShowTOC` | Whether the standalone table of contents (the TOC component) should appear for this doc. |

### Example

To create a doc, create an MDX file in `src/docs` (or the `docsPath` defined in the <a href="#theme-options">theme options</a>):

```
---
title: Title for your doc
shortTitle: Alternate (shorter) title used in navigation
description: Brief description of the doc (used in metadata and search index)
showPostNav: false
showTOC: false
---

## The first header should be an h2

This post will not show previous/next navigation or a table of contents since
`showPostNav` and `showTOC` are set to `false`.

```

See <a href="https://kabartolo.github.io/chicago-docs-demo/docs/configuration/site-options/#frontmatter">Configuration: Frontmatter</a> for details on the available frontmatter fields. See <a href="https://kabartolo.github.io/chicago-docs-demo/docs/mdx-guide">Guide to MDX</a> for help writing MDX and Markdown.

</TwoColumnSection>

<TwoColumnSection>

## Creating Pages

Other pages can be created using React, regular JavaScript, or MDX. An MDX file in `src/mdxPages` (or the `pagesPath` <a href="#theme-options">theme option</a>) will be rendered using the Page component. This component provides all <a href="https://kabartolo.github.io/chicago-docs-demo/docs/components-and-hooks/#chicago-docs-components">Chicago Docs components</a> but does **not** include layout features such as a sidebar or breadcrumb links.

To create a non-doc MDX page, create an MDX file in your specified `pagesPath` directory:

```
---
title: Title for your page
description: Brief description of the page (used in metadata)
---

## The first header should be an h2

Use Chicago Docs components here.

<TOC />

```