import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { rhythm } from "../utils/typography";

interface SectionProps {
    title: React.ReactNode,
    banner?: boolean,
}

const useStyles = createUseStyles({
    section: {
        backgroundColor: ({ banner, theme }) => banner ? theme.colors.secondary : undefined,
        color: ({ banner }) => banner ? "#FFFFFF" : undefined,
        paddingTop: ({ banner }) => banner ? rhythm(1) : rhythm(1/2),
        paddingBottom: ({ banner }) => banner ? rhythm(1) : rhythm(1/2),

        "& a": {
            textShadow: ({ banner }) => banner ? "none" : undefined,
        },
    },
    frame: {
        display: "flex",
        margin: "auto",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
        width: ({ theme }) => theme.pageMargin,
        maxWidth: ({ theme }) => theme.maxPageMargin,

        "& > div": {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: ({ banner }) => banner ? "stretch" : "center",
        },
    },
    content: {
        width: "100%",
    },
    heading: {
        marginTop: 0,
        color: ({ banner }) => banner ? "#FFFFFF" : undefined,
    },
});

const Section: React.FC<SectionProps> = (props) => {
    const { title, banner, children } = props;
    const theme = useTheme();
    const classes = useStyles({...props, theme});
    const heading = banner ? <h1 className={classes.heading}>{title}</h1> :
                    <h2 className={classes.heading}>{title}</h2>;

    return (
        <section className={classes.section}>
            <div className={classes.frame}>
                <div>
                    <div>
                        {title && heading}
                    </div>
                    <div className={classes.content}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
