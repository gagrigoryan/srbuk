import React from "react";
import Header from "../components/Header/Header";

type HomeLayoutProps = {
    children: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default HomeLayout;
