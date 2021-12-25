import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const RotatingNavLink = ({ href, children }) => (
  <NavLink href={href}>
    <NavLinkText>{children}</NavLinkText>
    <BoldNavLinkText>{children}</BoldNavLinkText>
  </NavLink>
);

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <RotatingNavLink href="/sale">Sale</RotatingNavLink>
          <RotatingNavLink href="/new">New&nbsp;Releases</RotatingNavLink>
          <RotatingNavLink href="/men">Men</RotatingNavLink>
          <RotatingNavLink href="/women">Women</RotatingNavLink>
          <RotatingNavLink href="/kids">Kids</RotatingNavLink>
          <RotatingNavLink href="/collections">Collections</RotatingNavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  perspective: 1000px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLinkText = styled.span`
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 400ms 100ms;
    will-change: transform;
  }
`;

const BoldNavLinkText = styled.span`
  position: absolute;
  top: 50px;
  left: 0;
  font-weight: ${WEIGHTS.bold};

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 400ms 100ms;
    will-change: transform;
  }
`;

const NavLink = styled.a`
  position: relative;
  overflow: hidden;

  text-decoration: none;
  color: var(--color-gray-900);
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover ${NavLinkText}, &:focus ${NavLinkText} {
      transform: translateY(-50px);
      transition: transform 300ms;
    }

    &:hover ${BoldNavLinkText}, &:focus ${BoldNavLinkText} {
      transform: translateY(-50px);
      transition: transform 300ms;
    }
  }
`;

export default Header;
