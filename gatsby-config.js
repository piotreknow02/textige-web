module.exports = {
  siteMetadata: {
    // Paweł zajmij się tym jeszcze
    title: `Textige`,
    description: `Nowy lepszy komunikator`,
    author: `@B&P Coders`,
    siteUrl: `https://textige.ml`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-24BNHL3NWL",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Textige - nowy lepszy komunikator`,
        short_name: `textige`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
