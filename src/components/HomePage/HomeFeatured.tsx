import React from "react";
import { motion } from "framer-motion";
import { FeaturedContent, HomeFeaturedSection } from "../../styles/components/HomeStyles";
import { Container } from "../../styles/components/GlobalStyles";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from "./homeFeatured.module.scss";

const HomeFeatured: React.FC = () => {
    return (
        <HomeFeaturedSection>
            <Container>
                <a href="/">
                    <FeaturedContent>
                        <div className={styles.wrapper}>
                            <h3>Featured Project</h3>
                            <motion.div
                                // animate={{ opacity: hovered ? 1 : 0 }}
                                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                                className="meta">
                                <h4>PEI Seafood</h4>
                                <h4>2019</h4>
                            </motion.div>
                        </div>
                    </FeaturedContent>
                </a>
            </Container>
        </HomeFeaturedSection>
    );
};

export default HomeFeatured;
