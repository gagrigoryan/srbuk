import styled from "styled-components";
import { motion } from "framer-motion";

//Banner
export const Banner = styled.div`
    background: black;
    height: 100vh;
    width: 100%;
    position: relative;
    margin-bottom: 296px;
`;
export const Video = styled.div`
    height: 100%;
    width: 100%;
    video {
        object-fit: cover;
    }
`;
export const Canvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: block;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const BannerTitle = styled(motion.h1)`
    position: absolute;
    bottom: -120px;
    left: -18px;
    color: #ffffff;
    //-webkit-text-stroke-width: 8px;
    //-webkit-text-fill-color: transparent;
    pointer-events: none;
`;

export const Headline = styled(motion.span)`
    display: block;
    font-size: 16rem;
    font-weight: 900;
    line-height: 0.76;
`;
