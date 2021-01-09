import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: #ffffff;
    color: #000;
    z-index: 100;
    overflow: hidden;
`;

export const NavHeader = styled.div`
    top: 40px;
    position: relative;
    h2 {
        color: #000;
    }
`;
export const CloseNav = styled.div`
    button {
        cursor: pointer;
        transform-origin: center;
        border: none;
        padding: 20px;
        background: none;
        outline: none;
        span {
            width: 36px;
            height: 8px;
            display: block;
            background: #000000;
            margin: 8px;
        }
    }
`;

export const NavList = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    ul {
        padding: 0;
        li {
            list-style: none;
            font-size: 3rem;
            text-transform: uppercase;
            font-weight: 900;
            height: 96px;
            line-height: 96px;
            overflow: hidden;
            .link {
                color: #000000;
                position: relative;
                display: flex;
                align-items: center;
                .arrow {
                    height: 76px;
                    margin-right: 8px;
                }
            }
            svg {
                width: 100px;
                path {
                    fill: #000000;
                }
            }
        }
    }
`;
export const NavFooter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 56px 0px;
    p {
        color: #000000;
    }
    svg path {
        fill: #000000;
    }
`;

export const NavVideos = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30%;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: #ffffff;
    .reveal {
        width: 100%;
        background: #ffffff;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
    }
    .video {
        background: #ffffff;
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        right: 0;
        z-index: -1;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
`;
