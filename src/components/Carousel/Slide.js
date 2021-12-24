import React from "react";
import styled from "styled-components";

export default function Slide({ img }) {
  return <IMG src={img} />;
}
const IMG = styled.img`
  all: unset;
  display: flex;
  max-width: 100%;
  box-shadow: 0 20px 20px -20px #19181a;
`;
