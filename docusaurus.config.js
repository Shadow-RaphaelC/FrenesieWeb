// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frénésie',
  tagline: 'Party-fighter PvP multijoueur',
  favicon: 'img/favicon.ico',
  headTags: [
  {
    tagName: 'link',
    attributes: { rel: 'apple-touch-icon', href: '/FrenesieWeb/img/apple-touch-icon.png' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'manifest', href: '/FrenesieWeb/img/site.webmanifest' },
  },
  {
    tagName: 'meta',
    attributes: { name: 'theme-color', content: '#D9A33A' },
  },
],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://shadow-raphaelc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/FrenesieWeb/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Shadow-RaphaelC', // Usually your GitHub org/user name.
  projectName: 'FrenesieWeb', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'wiki',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Frénésie',
        logo: {
          alt: 'Frénésie',
          src: 'img/logo_transparent.png',
          srcDark: 'img/pfp_amber_256.png',
        },
        items: [
        {
          type: 'dropdown',
          label: 'Accueil',
          to: '/',
          position: 'left',
          items: [
            { label: 'À propos', to: '/#a-propos' },
            { label: 'Comment jouer', to: '/#comment-jouer' },
            { label: "L'équipe", to: '/#equipe' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Personnages',
          position: 'left',
          items: [
            { type: 'doc', docId: 'personnages/umbris', label: 'Umbris' },
            { type: 'doc', docId: 'personnages/fleur-de-lys', label: 'Fleur-de-Lys' },
            { type: 'doc', docId: 'personnages/lee-mao', label: 'Lee Mao' },
            { type: 'doc', docId: 'personnages/melodieuzze', label: 'Mélodieuzze' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Profil',
          to: '/profil',
          position: 'left',
          items: [
            { label: 'Connexion', to: '/profil/connexion' },
            { label: 'Inscription', to: '/profil/inscription' },
          ],
        },
      ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Raphaël Couturier',
            items: [
              {label: 'Courriel', href: 'mailto:raphc.official.business@gmail.com'},
              {label: 'GitHub', href: 'https://github.com/Shadow-RaphaelC'},
            ],
          },
          {
            title: 'Vincent Lévesque',
            items: [
              {label: 'Courriel', href: 'mailto:levvin2@outlook.fr'},
              {label: 'GitHub', href: 'https://github.com/vincentLevesque2'},
            ],
          },
          {
            title: 'Mathis Teixeira',
            items: [
              {label: 'Courriel', href: 'mailto:mathis.teixeira44@gmail.com'},
              {label: 'GitHub', href: 'https://github.com/4EverMT'},
            ],
          },
          {
            title: 'Goufril Mardini',
            items: [
              {label: 'Courriel', href: 'mailto:goufril.mardini.dev@gmail.com'},
              {label: 'GitHub', href: 'https://github.com/goufff'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Équipe Frénésie · Collège Lionel-Groulx`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
