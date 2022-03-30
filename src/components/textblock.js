import React from "react";
import styled from "styled-components";

// .text-block__text--list {
//   list-style-type: none;
//   padding-left: 2.375rem;
// }

// .text-block__list-item {
//   position: relative;
// }

// .text-block__list-item::before {
//   content: "";
//   display: block;
//   border-color: transparent #965cb2;
//   border-style: solid;
//   border-width: 0.25em 0 0.25em 0.4375em;
//   position: absolute;
//   top: 0.375em;
//   left: -1.5em;
//   width: 0;
//   height: 0;
// }

const TextBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${(props) => props.textAlign && `text-align: ${props.textAlign}`}
`;

const Heading = styled.div`
  font-family: "New Rocker";
  font-size: 4.75rem;
  margin: 0;
`;

const Text = styled.p`
  font-family: "Forum";
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 2rem 0 0;
`;

const List = styled.ul`
  font-family: "Forum";
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 2rem 0 0;
  list-style-type: none;
  padding-left: 2.375rem;
`;

const Item = styled.li`
  position: relative;

  &::before {
    content: "";
    display: block;
    border-color: transparent #965cb2;
    border-style: solid;
    border-width: 0.25em 0 0.25em 0.4375em;
    position: absolute;
    top: 0.375em;
    left: -1.5em;
    width: 0;
    height: 0;
  }
`;

List.Item = Item;

TextBlock.Heading = Heading;
TextBlock.Text = Text;
TextBlock.List = List;

export default TextBlock;
