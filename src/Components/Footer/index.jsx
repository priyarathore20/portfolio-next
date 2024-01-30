import React from "react";
import "./styles";
import { FooterWrapper } from "./styles";
import { data } from "../../data";

const FooterSection = () => {
  return (
    <FooterWrapper>
      {data.footer.map((item, index) => (
        <a key={index} href={item?.href} target="_blank" rel="noreferrer">
          <img src={item?.img?.src} alt={item?.img} />
        </a>
      ))}
    </FooterWrapper>
  );
};

export default FooterSection;
