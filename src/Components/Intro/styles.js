import styled from "styled-components";

export const IntroWrapper = styled.section`
  height: calc(100vh - 4rem);
  width: 100vw;
  max-width: 75rem;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 968px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const IntroContent = styled.div`
  height: 100%;
  width: 100vw;
  padding: 2rem;
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 840px) {
    font-size: 10vw;
  }
  @media screen and (max-width: 968px) {
    align-items: center;
    /* justify-content: left; */
    /* text-align: left; */
  }
`;
export const Intro = styled.text`
  font-size: 1.75rem;
  font-weight: 100;

  @media screen and (max-width: 840px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 435px) {
    font-size: 1.25rem;
  }
`;
export const IntroPara = styled.p`
  font-size: medium;
  font-weight: 300;
  letter-spacing: 1px;
  /* text-wrap: balance; */

  button {
    background-color: white;
    margin: 1rem 0;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    border-radius: 3rem;
    cursor: pointer;
  }

  img {
    object-fit: cover;
    height: 1rem;
  }

  @media screen and (max-width: 840px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 435px) {
    font-size: 0.8rem;
  }
`;
export const IntroText = styled.span`
  span {
    color: yellow;
  }

  @media screen and (max-width: 840px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 435px) {
    font-size: 2rem;
  }
`;
export const IntroButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const IntroButton = styled.a`
  height: 50px;
  width: 100%;
  max-width: 90px;
  margin-right: 10px;
  border-radius: 0.5rem;

  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }
`;
export const IntroImg = styled.img`
  position: absolute;
  top: 2rem;
  z-index: -1;
  object-fit: cover;
  right: 0;
  height: 80vh;

  @media screen and (max-width: 1036px) {
    right: 2rem;
  }
  @media screen and (max-width: 968px) {
    display: none;
  }
`;
