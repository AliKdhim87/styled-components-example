import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const Ul = styled.ul`
  list-style-type: none;
  width: 50%;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: bold;
  font-family: cursive;
  justify-content: space-around;
  margin-left: auto;
`;
const Menu = styled.nav`
  display: flex;
  width: 100%;
  height: 35px;
  background: ${({ theme }) => theme.colors.dark};
  position: relative;
  padding: 1.5rem 1rem;
  @media${({ theme }) => theme.mediaQueries.phoneMode} {
    ${Ul}{
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0px;
        top: 48px;
        background: ${({ theme }) => theme.colors.dark};
        width: 60%;
        visibility: ${(props) => props.show || 'hidden'};
    }
    }
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  transition: 0.5 ease-in-out;
  color: ${(props) => props.active || ` #fff`};
  &:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
  margin: -6px;
  @media${({ theme }) => theme.mediaQueries.phoneMode}{
    display: flex;
    justify-content: space-around;
    height: 10vh;
 
  }
`;
const Icon = styled.i`
  position: absolute;
  right: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  top: 11px;
  cursor: pointer;
  @media${({ theme }) => theme.mediaQueries.desktopMode}{
    visibility:hidden;
}
  
`;
const Logo = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  margin: -9px;
`;
const Navbar = () => {
  const router = useLocation();
  function isActive(route) {
    return route === router.pathname;
  }
  const [open, toggle] = useState(false);
  return (
    <Menu show={open}>
      <Logo to='/'>Styled Components</Logo>
      <Icon onClick={(e) => toggle(!open)} className='fas fa-bars'></Icon>
      <Ul>
        {isActive('/') ? (
          <Link active='red' to='/'>
            Home
          </Link>
        ) : (
          <Link to='/'>Home</Link>
        )}

        {isActive('/about') ? (
          <Link active='red' to='/about'>
            About
          </Link>
        ) : (
          <Link to='/about'>About</Link>
        )}

        {isActive('/contact') ? (
          <Link active='red' to='/contact'>
            Contact
          </Link>
        ) : (
          <Link to='/contact'>Contact</Link>
        )}
      </Ul>
    </Menu>
  );
};

export default Navbar;
