import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FeaturedContent,
    HomeFeaturedSection,
    FeaturedVideo,
    FeaturedProjects,
} from "../../styles/components/HomeStyles";
import { Container } from "../../styles/components/GlobalStyles";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from "./homeFeatured.module.scss";

const HomeFeatured: React.FC = () => {
    const [hovered, setHovered] = useState<boolean>(false);
    const animation = useAnimation();
    const [featured, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-300px",
    });

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        }
    }, [animation, inView]);

    return (
        <HomeFeaturedSection
            ref={featured}
            animate={animation}
            initial="hidden"
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
                },
                hidden: { opacity: 0, y: 72 },
            }}>
            <Container>
                <a href="/">
                    <FeaturedVideo>
                        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                        <video
                            loop
                            autoPlay
                            muted
                            src="https://storage.coverr.co/videos/8AUaT33om9l2g55DMLrQMZA3kJwceUDz?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjEwNDk2MDczfQ.LVjDQgEGYyydk4SQ7z7VNYU4GJkdVhAvtJSWYmAYk9o"
                        />
                    </FeaturedVideo>
                    <FeaturedContent onHoverStart={() => setHovered(!hovered)} onHoverEnd={() => setHovered(!hovered)}>
                        <div className={styles.wrapper}>
                            <h3>Featured Project</h3>
                            <motion.div
                                animate={{ opacity: hovered ? 1 : 0 }}
                                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                                className="meta">
                                <h4>PEI Seafood</h4>
                                <h4>2019</h4>
                            </motion.div>
                        </div>
                        <h2 className="featured-title">
                            NOT <br />
                            HUMBLE
                            <span className="arrow">
                                <motion.svg
                                    animate={{ x: hovered ? 48 : 0 }}
                                    transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 101 57">
                                    <path
                                        d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                        fill="#FFF"
                                        fillRule="evenodd"
                                    />
                                </motion.svg>
                            </span>
                        </h2>
                    </FeaturedContent>
                </a>
            </Container>
            <Container>
                <FeaturedProjects>
                    <div className={styles.featuredWrapper}>
                        <button>
                            <span>All Projects</span>
                        </button>
                    </div>
                </FeaturedProjects>
            </Container>
        </HomeFeaturedSection>
    );
};

export default HomeFeatured;
