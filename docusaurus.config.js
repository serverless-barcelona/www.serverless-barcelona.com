// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Serverless Barcelona',
  tagline: 'best meetup ever xD',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://serverless-barcelona.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'serverless-barcelona', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Serverless Barcelona',
        logo: {
          alt: 'Serverless Barcelona Logo',
          src: 'img/logosls.svg',
        },
        items: [
          {to: '/', label: 'Home', position: 'right'},
          {to: '/about', label: 'About', position: 'right'},
          {to: '/blog', label: 'Blog', position: 'right'},
          {to: 'https://www.meetup.com/es-ES/serverless-barcelona/events/', label: 'Events', position: 'right'},
          // {
          //   href: 'https://github.com/serverless-barcelona',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          // {
          //   href: 'https://www.linkedin.com/groups/8730626/',
          //   label: 'LinkedIn',
          //   position: 'right',
          // },          
        ],
      },
      footer: {
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Blog',
                to: '/blog',
              },              
              {
                label: 'Events',
                to: 'https://www.meetup.com/es-ES/serverless-barcelona/events/',
              },                        
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/groups/8730626/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/serverless-barcelona',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Serverless Barcelona.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
