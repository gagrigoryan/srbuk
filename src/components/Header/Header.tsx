import React from "react";
import { HeaderNav, Logo, Menu } from "../../styles/components/HeaderStyles";
import { Container, Flex } from "../../styles/components/GlobalStyles";

type HeaderProps = {
    onToggleMenu: React.MouseEventHandler;
};

const Header: React.FC<HeaderProps> = ({ onToggleMenu }) => {
    return (
        <HeaderNav
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -72, opacity: 0 }}
            transition={{
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            }}>
            <Container>
                <Flex>
                    <Logo>
                        <a href="/">SRBUK.</a>
                    </Logo>
                    <Menu>
                        <button onClick={onToggleMenu}>
                            <span />
                            <span />
                        </button>
                    </Menu>
                </Flex>
            </Container>
        </HeaderNav>
    );
};

export default Header;
