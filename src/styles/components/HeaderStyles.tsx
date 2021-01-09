import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderNav = styled(motion.div)`
    height: 0;
    width: 100%;
    position: absolute;
    top: 72px;
    right: 0;
    left: 0;
    z-index: 99;
    color: #ffffff;
`;

export const Logo = styled.div`
    a {
        font-size: 1.8rem;
        text-decoration: none;
        font-weight: 800;
        color: #ffffff;
        pointer-events: none;
    }
`;

export const Menu = styled.div`
    button {
        transform-origin: center;
        border: none;
        padding: 20px;
        background: none;
        outline: none;
        cursor: pointer;
        span {
            width: 36px;
            height: 8px;
            display: block;
            margin: 8px;
            background: #ffffff;
        }
    }
`;
