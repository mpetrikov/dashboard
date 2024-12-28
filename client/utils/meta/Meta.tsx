import Head from "next/head";

export interface MetaProps {
    title: string;
    description?: string;
}

export const Meta = ({ title, description }: MetaProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                ></link>
                {description ? (
                    <meta
                        itemProp="description"
                        name="description"
                        content={description}
                    />
                ) : (
                    <meta name="robots" content="noindex, nofollow" />
                )}
            </Head>
        </>
    );
};
