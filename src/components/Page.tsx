import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import { Project } from "../utils/queries";

interface PageProps {
    title?: string
    description?: string
}

interface PageQuery {
    site: {
        siteMetadata: {
            project: Project,
        }
    }
}

const Page: React.FC<PageProps> = ({title, description, children }) => {
    const data = useStaticQuery<PageQuery>(graphql`
        query PageQuery {
            site {
                siteMetadata {
                    project {
                        name
                        description
                    }
                }
            }
        }
    `);
    const titleTag = title ?
                     <title>{title} &lambda; {data.site.siteMetadata.project.name}</title> :
                     <title>&lambda; {data.site.siteMetadata.project.name}</title>;
    return (
        <>
            <Helmet>
                {titleTag}
                <meta name="description" content={description || data.site.siteMetadata.project.description} />
            </Helmet>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Page;
