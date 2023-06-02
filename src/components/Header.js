import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components'
import Navbar from './Navbar';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/'>
        <img src='images/mylogo.png' alt='logo img' style={{ 'width':'34%', 'margin-left': '20px' }} />
        {/* <img src='images/logo.png' alt='logo img' /> */}
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${ ({theme}) => theme.colors.bg };
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow-y: hidden;

    .logo {
        height: 5rem;
    }
`;

export default Header
