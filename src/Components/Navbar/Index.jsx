import React from "react";
import "./styles";
import {
  DesktopMenu,
  DesktopMenuBtn,
  NavbarWrapper,
  BurgerMenu,
} from "./styles";
import Logo from "/public/assets/logo.png";
import ContactImg from "../../assets/contact.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <NavbarWrapper>
        <img src={Logo?.src} alt="" />
        <DesktopMenu>
          <a href="#intro">Home</a>
          <a href="#skills">Skills</a>
          <a href="#works">Projects</a>
        </DesktopMenu>
        <DesktopMenuBtn>
          <a href="#contact">
            <img src={ContactImg?.src} alt="" />
            Contact me{" "}
          </a>
        </DesktopMenuBtn>
        <AiOutlineMenu onClick={() => setShowNav(!showNav)} />
      </NavbarWrapper>
      <BurgerMenu showNav={showNav}>
        <a href="#intro" onClick={() => setShowNav(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setShowNav(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setShowNav(false)}>
          Skills
        </a>
        <a href="#works" onClick={() => setShowNav(false)}>
          Projects
        </a>
      </BurgerMenu>
    </>
  );
};

export default Navbar;
