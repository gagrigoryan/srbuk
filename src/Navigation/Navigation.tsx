import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Flex } from "../styles/components/GlobalStyles";
import { CloseNav, Nav, NavFooter, NavHeader, NavList, NavVideos } from "../styles/components/NavigationStyles";

interface revealVideoType {
    show: boolean;
    img: string;
    key: number;
}

type NavigationProps = {
    toggleMenu: boolean;
    onToggleMenu: React.MouseEventHandler;
};

const navRoutes = [
    {
        id: 0,
        title: "not humble",
        path: "/not-humble",
        img:
            "https://images.unsplash.com/photo-1610209015157-35c3cd05d348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
        id: 1,
        title: "bleeping easy",
        path: "/bleeping-easy",
        img:
            "https://images.unsplash.com/photo-1602524816765-67313fa3ef54?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
        id: 2,
        title: "make it zero",
        path: "/make-it-zero",
        img:
            "https://images.unsplash.com/photo-1610148884558-4ed532bfe55b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
        id: 3,
        title: "it takes an island",
        path: "/it-takes-an-island",
        img:
            "https://images.unsplash.com/photo-1610151273968-d1bc0131a749?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
        id: 4,
        title: "50 beaches",
        path: "/50-beaches",
        img:
            "https://images.unsplash.com/photo-1610122833192-e4efe57df1e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
];

const Navigation: React.FC<NavigationProps> = ({ toggleMenu, onToggleMenu }) => {
    const [revealVideo, setRevealVideo] = useState<revealVideoType>({
        show: false,
        img: navRoutes[0].img,
        key: 0,
    });

    return (
        <>
            <AnimatePresence>
                {toggleMenu && (
                    <Nav
                        initial={{ x: "-100%" }}
                        exit={{ x: "-100%" }}
                        animate={{ x: toggleMenu ? 0 : "-100%" }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}>
                        <Container>
                            <NavHeader>
                                <Flex>
                                    <h2>Projects</h2>
                                    <CloseNav>
                                        <button onClick={onToggleMenu}>
                                            <span />
                                            <span />
                                        </button>
                                    </CloseNav>
                                </Flex>
                            </NavHeader>
                            <NavList>
                                <ul>
                                    {navRoutes.map((route) => (
                                        <motion.li
                                            key={route.id}
                                            onHoverStart={() =>
                                                setRevealVideo({
                                                    show: true,
                                                    img: route.img,
                                                    key: route.id,
                                                })
                                            }
                                            onHoverEnd={() =>
                                                setRevealVideo({
                                                    show: false,
                                                    img: route.img,
                                                    key: route.id,
                                                })
                                            }>
                                            <a href={`/projects${route.path}`}>
                                                <motion.div
                                                    initial={{ x: -108 }}
                                                    className="link"
                                                    whileHover={{
                                                        x: -40,
                                                        transition: {
                                                            duration: 0.4,
                                                            ease: [0.6, 0.05, -0.01, 0.9],
                                                        },
                                                    }}>
                                                    <span className="arrow">
                                                        <motion.svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 101 57">
                                                            <path
                                                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                                fill="#000"
                                                                fillRule="evenodd"
                                                            />
                                                        </motion.svg>
                                                    </span>
                                                    {route.title}
                                                </motion.div>
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </NavList>
                            <NavFooter></NavFooter>
                            <NavVideos>
                                <motion.div animate={{ width: revealVideo.show ? 0 : "100%" }} className="reveal" />
                                <motion.div className="video">
                                    <AnimatePresence initial={false} exitBeforeEnter>
                                        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                                        <motion.img
                                            initial={{ opacity: 0 }}
                                            exit={{ opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                            }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                            key={revealVideo.key}
                                            src={revealVideo.img}
                                        />
                                    </AnimatePresence>
                                </motion.div>
                            </NavVideos>
                        </Container>
                    </Nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
