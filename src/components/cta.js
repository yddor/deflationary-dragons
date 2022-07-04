import React from "react";
import styled from "styled-components";

const Button = styled.a`
  text-decoration: none;
  font-family: "New Rocker";
  font-size: 2.25rem;
  color: #fff;
  background-color: #441b07;
  padding: 0.75rem 5rem;
  border-radius: 0.625rem;
  margin-bottom: 0.5rem;
  margin-left: 0.125rem;
  margin-right: 0.125rem;
  display: inline-flex;
  align-items: center;
`;

const LinkIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
`;

const Cta = ({ title, link }) => {
  return (
    <Button href={link} target="_blank" rel="noopener noreferrer">
      {title}
      <LinkIcon fill="currentColor" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
        />
        <path
          fill-rule="evenodd"
          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
        />
      </LinkIcon>
    </Button>
  );
};

export default Cta;
