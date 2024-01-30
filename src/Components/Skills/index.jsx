import React from "react";
import {
  ClientCard,
  ClientCards,
  ClientDescription,
  ClientHeader,
  ClientWrapper,
} from "./styles";
import { data } from "../../data";

const MyClients = () => {
  return (
    <ClientWrapper id="skills">
      <ClientHeader>{data.skillSection.title}</ClientHeader>
      {data.skillSection.text && (
        <ClientDescription>{data.skillSection.text}</ClientDescription>
      )}
      <ClientCards>
        {data.skillSection.skills.map((item, index) => {
          return (
            <ClientCard key={index}>
              <img src={item?.img?.src} alt={item.label} />
              <p>{item.label}</p>
            </ClientCard>
          );
        })}
      </ClientCards>
    </ClientWrapper>
  );
};

export default MyClients;
