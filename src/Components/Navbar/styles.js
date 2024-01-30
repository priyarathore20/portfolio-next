import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  height: 5rem;
  width: 100vw;
  max-width: 75rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: rgb(30, 30, 30);
  z-index: 11;

  svg {
    display: none;
    height: 30px;
    width: 35px;
    cursor: pointer;

    @media screen and (max-width: 760px) {
      display: block;
    }
  }

  img {
    object-fit: contain;
    height: 4rem;

    @media screen and (max-width: 760px) {
      height: 3rem;
    }
  }
`;
export const DesktopMenu = styled.div`
  a {
    color: white;
    font-size: 18px;
    margin: 1rem;
    cursor: pointer;
  }

  a:hover {
    border-bottom: 3px solid yellow;
    color: yellow;
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const DesktopMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border: none;
  background-color: white;
  color: black;
  border-radius: 2rem;
  letter-spacing: 0.7px;
  cursor: pointer;
  font-size: 14px;

  a {
    display: flex;
    align-items: center;
    color: #000;
  }

  img {
    height: 1rem;
    width: 1rem;
    margin: 1rem;
    object-fit: cover;
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  top: 0;
  width: 100%;
  position: fixed;
  height: 100vh;
  overflow: hidden;
  padding: 10rem 0;
  background-color: rgb(35, 35, 35);
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  clip-path: ${({ showNav }) =>
    !showNav ? "circle(100px at 50% -15%)" : "circle(2000px at 50% -10%)"};
  transition: all 0.5s ease-out;

  a {
    color: white;
    font-size: 16px;
  }
  a:hover {
    border-bottom: 3px solid yellow;
    color: yellow;
    padding-bottom: 0.5rem;
  }

  /* @media screen and (max-width: 760px) {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
} */
`;
