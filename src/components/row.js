import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -2rem;
  margin-left: -2rem;

  ${(props) => props.alignCenter && "justify-content: center"};
  ${(props) => props.alignCenterVertically && "align-content: center"};
`;

const Col = styled.div`
  flex: none;
  padding-right: 2rem;
  padding-left: 2rem;

  ${(props) => props.divided && `border-left: 1px solid rgba(255, 255, 255, 0.5);`}

  ${(props) => props.size && `width: calc(100% * (${props.size} / 12));`}

  @media (max-width: 1400px) {
    ${(props) => props.sizeXl && `width: calc(100% * (${props.sizeXl} / 12));`}
  }
  @media (max-width: 1200px) {
    ${(props) => props.sizeLg && `width: calc(100% * (${props.sizeLg} / 12));`}
  }
  @media (max-width: 992px) {
    ${(props) => props.sizeMd && `width: calc(100% * (${props.sizeMd} / 12));`}
  }
  @media (max-width: 768px) {
    ${(props) => props.sizeSm && `width: calc(100% * (${props.sizeSm} / 12));`}
  }
  @media (max-width: 576px) {
    ${(props) => props.sizeXs && `width: calc(100% * (${props.sizeXs} / 12));`}
  }
`;

Row.Col = Col;

export default Row;
