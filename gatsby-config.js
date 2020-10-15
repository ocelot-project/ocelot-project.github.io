const theme = require("./src/utils/theme.js");

module.exports = {
    siteMetadata: {
        project: "Ocelot",
        description: "The Ocelot Lisp Machine-inspired operating system",
        projectRepo: "https://github.com/ocelot-project/ocelot",
        siteRepo: "https://github.com/ocelot-project/ocelot-site",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-jss",
            options: { theme },
        },
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography",
            },
        },
        "gatsby-plugin-react-helmet-async",
    ],
};
