import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import logo_nav from "../images/logo_nav.svg";
import whitepaper from "../pdf/Deflationary_Dragons_Whitepaper_v2.0_1.pdf";

const Navbar = styled.div`
  height: 5rem;
`;

const Toggle = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 6rem;
  height: 6rem;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1;
  display: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 0.5rem;
    width: 4rem;
    background-color: #fff;
    top: 2rem;
    left: 1rem;
    transition: 150ms ease-out;
  }

  &::after {
    top: 3.5rem;
  }

  @media (max-width: 768px) {
    display: block;

    ${(props) =>
      props.open === true &&
      `
    &::before {
      top: 2.75rem;
      transform: rotate(-45deg);
    }
    
    &::after {
      top: 2.75rem;
      transform: rotate(45deg);
    }`}
  }
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    padding: 2rem;
    overflow-y: auto;
    transform: translateY(-100%);
    transition: transform 0.4s ease-in-out;

    ${(props) => props.open === true && `transform: none;`}
  }
`;

const Logo = styled.img`
  height: 100%;

  @media (max-width: 768px) {
    width: calc(100% - 8rem);
    height: auto;
  }
`;

const Links = styled.nav`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-top: 4vw;
    flex-direction: column;
  }
`;

const LinkButton = styled.div`
  font-family: "New Rocker";
  font-size: 1.5rem;
  color: #fff;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 10vw;
    text-align: center;
  }
`;

const LinkWrapper = styled.div`
  margin: 0 1rem;
`;

const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) return document.body.classList.add("nav-open");
    document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <Navbar>
      <Toggle open={open} onClick={() => setOpen(!open)} />
      <Content open={open}>
        <Logo src={logo_nav} />
        <Links>
          <LinkWrapper>
            <Link to="/">
              <LinkButton>Home</LinkButton>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link to="/lore">
              <LinkButton>Lore</LinkButton>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <a target="_blank" rel="noopener noreferrer" href={whitepaper}>
              <LinkButton>Whitepaper</LinkButton>
            </a>
          </LinkWrapper>
          <LinkWrapper>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/DefDragonsSOL"
            >
              <LinkButton>
                <svg height="1em" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                </svg>
              </LinkButton>
            </a>
          </LinkWrapper>
          <LinkWrapper>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/5Dk6huKj9K"
            >
              <LinkButton>
                <svg height="1em" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                </svg>
              </LinkButton>
            </a>
          </LinkWrapper>
        </Links>
      </Content>
      {/* <Link to="/lore">About</Link>
      <Link to="/">Back to Home</Link> */}
    </Navbar>
  );
};

export default Nav;
