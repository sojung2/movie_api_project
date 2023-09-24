import React from "react";
import BoxList from "./BoxList";
import "./Box.css";
import styled from "styled-components";

const Headline = styled.div`
  padding: 35px 0 30px 0;
  font-size: 35px;
  font-weight: bold;

  span {
    padding: 0 0 13px 0;
    border-bottom: 4px solid black;
  }
`;

const BoxOffice = () => {
  return (
    <div className="boxOffice">
      <Headline>
        <span>BOX OFFICE</span>
      </Headline>

      <BoxList />
    </div>
  );
};

export default BoxOffice;
