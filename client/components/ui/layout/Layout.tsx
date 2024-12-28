import type { MetaProps } from "@/utils/meta/Meta";
import { Meta } from "@/utils/meta/Meta";

import { Header } from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children, ...meta }: LayoutProps & MetaProps) => {
    return (
        <>
            <Meta {...meta}></Meta>
            <div>
                <Header></Header>
                <main>{children}</main>
            </div>
        </>
    );
};
