import React from "react";
import { createUseStyles } from "react-jss";
import { rhythm } from "../utils/typography";

const useStyles = createUseStyles({
    columns: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        "& > *": {
            flex: 1,
            padding: {
                left: rhythm(1/2),
                right: rhythm(1/2),
            },
        },
    }
});

const Columns: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.columns}>
            {children}
        </div>
    );
}

export default Columns;
