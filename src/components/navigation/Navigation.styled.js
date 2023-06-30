import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 25px; */
`;

export const NavAuthBox = styled.div`
  display: flex;
  gap: 25px;
`;

export const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 25px;

  &:hover,
  &:focus {
    color: beige;
    /* font-weight: bold; */
  }

  &.active {
    color: beige;
  }
`;