import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: linear-gradient(to bottom, #000000 0%, #381a1a 102%);
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 2000;
  position: fixed;
  width:68%;

`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #f08080;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
<<<<<<< Updated upstream
  // margin-right: -24px;
  width: 100vw;
=======
  width: 16vw;
>>>>>>> Stashed changes
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 100px;
  width: 21vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

<<<<<<< Updated upstream
export const AdminNavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  width: 21vw;
=======
export const Button = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
>>>>>>> Stashed changes
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #f08080;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #f08080;
  }
`;