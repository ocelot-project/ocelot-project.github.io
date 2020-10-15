import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { createUseStyles, useTheme } from "react-jss";
import Columns from "./Columns";
import { rhythm, scale } from "../utils/typography";
import { fortune, lispify } from "../utils/text";

interface HeaderQuery {
    site: {
        siteMetadata: {
            project: string,
            projectRepo: string,
        }
    }
}

const useStyles = createUseStyles({
    header: {
        paddingTop: rhythm(1/2),
        paddingBottom: rhythm(1/8),
        backgroundColor: ({ theme }) => theme.colors.primary,
        color: "white",
        width: "100%",
        display: "flex",
        justifyContent: "center",

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
        },
        userSelect: "none",
    },
    title: {
        display: "inline",
        color: "white",
    },
    quote: {
        verticalAlign: "-25%",
        ...scale(-1/2),
    },
});

const Header: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles({theme});
    const data = useStaticQuery<HeaderQuery>(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                    project
                    projectRepo
                }
            }
        }
    `);
    const [randomQuote, setRandomQuote] = React.useState("");

    React.useEffect(() => {
        setRandomQuote(lispify(fortune()));
    }, []);

    return (
        <header className={classes.header}>
            <div>
                <div>
                    <a href="">
                    <h1 className={classes.title}>{" "}&lambda; {data.site.siteMetadata.project}{" "}</h1>
                    <span className={classes.quote}>'{randomQuote}</span>
</a>
                </div>
                <Columns>
<a href={data.site.siteMetadata.projectRepo}>
                    'git
                    </a>
                </Columns>
            </div>
        </header>
    );
}

export default Header;
