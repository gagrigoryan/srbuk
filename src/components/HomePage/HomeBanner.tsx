import React, { useEffect, useRef } from "react";
import { Banner, Video, Canvas, BannerTitle, Headline } from "../../styles/components/HomeStyles";
import useWindowSize from "../../hooks/useWindowsSize";

const HomeBanner: React.FC = () => {
    const size = useWindowSize();
    const canvas = useRef<HTMLCanvasElement>(null);
    const video = useRef<HTMLVideoElement>(null);
    const videoPath =
        "https://storage.coverr.co/videos/wBF1TwTsaS252Hge5IRR021oA00ggH1c00J?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjEwMTIxOTMyfQ.bUPi-L66iBt7hmrHiojL2xbAoc3anYJRqji84oT_gq8";

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        video.current.play();
        const renderingElement = canvas.current;
        if (renderingElement) {
            const drawingElement = renderingElement.cloneNode() as HTMLCanvasElement;
            const drawingCtx = drawingElement.getContext("2d");
            const renderingCtx = renderingElement.getContext("2d");
            let lastX: number;
            let lastY: number;
            let moving = false;
            if (drawingCtx && renderingCtx) {
                renderingCtx.globalCompositeOperation = "source-over";
                renderingCtx.fillStyle = "#000000";
                renderingCtx.fillRect(0, 0, size.width, size.height);

                renderingElement.addEventListener("mouseover", (ev) => {
                    moving = true;
                    lastX = ev.pageX - renderingElement.offsetLeft;
                    lastY = ev.pageY - renderingElement.offsetTop;
                });

                renderingElement.addEventListener("click", (ev) => {
                    moving = true;
                    lastX = ev.pageX - renderingElement.offsetLeft;
                    lastY = ev.pageY - renderingElement.offsetTop;
                });

                renderingElement.addEventListener("mouseup", (ev) => {
                    moving = false;
                    lastX = ev.pageX - renderingElement.offsetLeft;
                    lastY = ev.pageY - renderingElement.offsetTop;
                });

                renderingElement.addEventListener("mousemove", (ev) => {
                    if (moving) {
                        drawingCtx.globalCompositeOperation = "source-over";
                        renderingCtx.globalCompositeOperation = "destination-out";
                        const currentX = ev.pageX - renderingElement.offsetLeft;
                        const currentY = ev.pageY - renderingElement.offsetTop;
                        drawingCtx.lineJoin = "round";
                        drawingCtx.moveTo(lastX, lastY);
                        drawingCtx.lineTo(currentX, currentY);
                        drawingCtx.closePath();
                        drawingCtx.lineWidth = 100;
                        drawingCtx.stroke();
                        lastX = currentX;
                        lastY = currentY;
                        renderingCtx.drawImage(drawingElement, 0, 0);
                    }
                });
            }
        }
    });

    const parent = {
        initial: { y: 800 },
        animate: {
            y: 0,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const child = {
        initial: { y: 800 },
        animate: {
            y: 0,
            transition: {
                duration: 1,
                ease: [0.6, -0.05, -0.01, 0.9],
            },
        },
    };

    return (
        <Banner>
            <Video>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video ref={video} height="100%" width="100%" loop muted autoPlay src={videoPath} />
            </Video>
            <Canvas height={size.height} width={size.width} ref={canvas} />
            <BannerTitle variants={parent} initial="initial" animate="animate">
                <Headline variants={child}>SR</Headline>
                <Headline variants={child}>BUK.</Headline>
            </BannerTitle>
        </Banner>
    );
};

export default HomeBanner;
