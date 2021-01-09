import React, { useState } from "react";
import Header from "../components/Header/Header";
import Navigation from "../Navigation/Navigation";

type HomeLayoutProps = {
    children: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    const onToggleMenu: React.MouseEventHandler = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <>
            <Header onToggleMenu={onToggleMenu} />
            <Navigation toggleMenu={toggleMenu} onToggleMenu={onToggleMenu} />
            <main>{children}</main>
        </>
    );
};

export default HomeLayout;
