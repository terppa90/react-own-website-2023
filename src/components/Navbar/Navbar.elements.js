import styled from 'styled-components';
import { BsLightningCharge } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: rgb(
    240 249 255
  ); // rgb(236 254 255) rgb(240 249 255) rgb(248 250 252)
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999; // Above everything else
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: rgb(8 47 73);
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-family: 'Tektur', cursive;
  /* font-family: 'Oswald', sans-serif; */
  /* font-family: 'Handjet', cursive; */
`;

export const NavIcon = styled(BsLightningCharge)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    color: rgb(8 47 73);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 80px;
    left: ${({ $clickmouse }) => ($clickmouse ? 0 : '-100%')};
    opacity: 1;
    transition: all 1s ease;
    background: rgb(240 249 255);
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid rgb(2 132 199);
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  font-family: 'Tektur', cursive;
  color: rgb(8 47 73); // rgb(56 189 248) tailwind: text-sky-400
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    /* font-family: 'Source Sans Pro', sans-serif; */
    font-family: 'Tektur', cursive;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #38bdf8;
      transition: all 0.5s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
