const theme = require("./src/utils/theme.js");

module.exports = {
    siteMetadata: {
        project: {
            name: "Ocelot",
            description: "The Ocelot Lisp Machine-inspired operating system",
            repo: "https://github.com/ocelot-project/ocelot",
        },
        subprojects: [
            {
                name: "olman",
                description: "Ocelot Login Manager",
                repo: "https://github.com/ocelot-project/olman",
            },
        ],
        siteRepo: "https://github.com/ocelot-project/ocelot-project.github.io",
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
