import React from "react";
import styled from "styled-components";

const TeamMember = styled.div`
  text-align: center;
`;

const AvatarContainer = styled.div`
  padding-bottom: 100%;
  position: relative;
`;

const Avatar = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

const Name = styled.h4`
  font-family: "New Rocker";
  font-size: 2.5rem;
  margin: 1rem 0 0;
`;

const Role = styled.p`
  font-family: "Forum";
  font-size: 1.75rem;
  margin: 0.5rem 0 0;
`;

TeamMember.AvatarContainer = AvatarContainer;
TeamMember.Avatar = Avatar;
TeamMember.Name = Name;
TeamMember.Role = Role;

export default TeamMember;
