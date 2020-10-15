import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

interface PageProps {
    title?: string
    description?: string
}

interface PageQuery {
    site: {
        siteMetadata: {
            project: string,
            description: string,
        }
    }
}

const Page: React.FC<PageProps> = ({title, description, children }) => {
    const data = useStaticQuery<PageQuery>(graphql`
        query PageQuery {
            site {
                siteMetadata {
                    project
                    description
                }
            }
        }
    `);
    const titleTag = title ?
                     <title>{title} &lambda; {data.site.siteMetadata.project}</title> :
                     <title>&lambda; {data.site.siteMetadata.project}</title>;
    return (
        <>
            <Helmet>
                {titleTag}
                <meta name="description" content={description || data.site.siteMetadata.description} />
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
