import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { createUseStyles, useTheme } from "react-jss";
import { rhythm, scale } from "../utils/typography";

interface FooterQuery {
    site: {
        siteMetadata: {
            siteRepo: string,
        }
    }
}

const useStyles = createUseStyles({
    footer: {
        backgroundColor: ({ theme }) => theme.colors.primary,
        color: "white",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: {
            top: rhythm(1/2),
            bottom: rhythm(1/2),
        },

        "& a": {
            textShadow: "none",
            background: "none",
            color: "white",
        },

        "& > div": {
            maxWidth: ({ theme }) => theme.maxPageMargin,
            width: ({ theme }) => theme.pageMargin,
            display: "flex",
            justifyContent: "space-between",
        }
    },

    copyright: {
        display: "flex",
        flexDirection: "column",
        ...scale(-1/2),
    },
});

const Footer: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles({theme});
    const data = useStaticQuery<FooterQuery>(graphql`
        query FooterQuery {
            site {
                siteMetadata {
                    siteRepo
                }
            }
        }
    `);
    const year = new Date().getFullYear();

    return (
        <footer className={classes.footer}>
            <div>
                <div className={classes.copyright}>
                    <span>Copyright &#169; {year} Jordan Mulcahey & the Ocelot contributors</span>
                    <a href={`${data.site.siteMetadata.siteRepo}/blob/master/LICENSE`}>CC-BY-SA-4.0</a>
                </div>
                <a href={data.site.siteMetadata.siteRepo}>(edit 'ocelot-site)</a>
            </div>
        </footer>
    );
}

export default Footer;
