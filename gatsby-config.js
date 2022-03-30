module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Deflationary Dragons",
        short_name: "DD",
        start_url: "/",
        background_color: "#371d23",
        theme_color: "#371d23",
        display: "standalone",
        icon: "src/images/favicon.png",
        crossOrigin: `use-credentials`,
      },
    }]
};