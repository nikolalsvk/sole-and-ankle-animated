/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <ContentFadeIn>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
          </Footer>
        </ContentFadeIn>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  opacity: 0;

  @media (prefers-reduced-motion: no-preference) {
    animation: fadeIn ease-in-out 400ms;
    animation-fill-mode: forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(500px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;

  @media (prefers-reduced-motion: no-preference) {
    animation: slideIn ease-in-out 600ms;
    animation-fill-mode: forwards;
  }
`;

const ContentFadeIn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0;

  @media (prefers-reduced-motion: no-preference) {
    animation: fadeIn ease-in-out 600ms 500ms;
    animation-fill-mode: forwards;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: slideIn ease-in-out 600ms;
    animation-fill-mode: backwards;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (prefers-reduced-motion: no-preference) {
    a:nth-child(1) {
      animation-delay: 400ms;
    }
    a:nth-child(2) {
      animation-delay: 600ms;
    }
    a:nth-child(2) {
      animation-delay: 800ms;
    }
    a:nth-child(3) {
      animation-delay: 1000ms;
    }
    a:nth-child(4) {
      animation-delay: 1200ms;
    }
    a:nth-child(5) {
      animation-delay: 1400ms;
    }
    a:nth-child(6) {
      animation-delay: 1600ms;
    }
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
