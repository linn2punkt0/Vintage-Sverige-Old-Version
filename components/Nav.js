import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledNav = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 3em;
  font-family: var(--title-font);
`;
const StyledLogo = styled.img`
  width: 200px;
  height: 200px;
`;

const UnderLinedMenu = styled.div`
  width: 100%;
  border-bottom: solid 2px black;
  padding-bottom: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  text-align: center;
`;

const Nav = () => {
  return (
    <StyledNav>
      <UnderLinedMenu>
        {/* <Link href="/index" as="/">
          <a>Startsida</a>
        </Link> */}
        {/* <Link href="/events" as="/event-och-massor"> */}
        <Link href="/hitta-event">
          <a>Event & Mässor</a>
        </Link>
        {/* <Link href="/vintageschool" as="/vintageskola"> */}
        <Link href="/vintageskola">
          <a>Vintageskola</a>
        </Link>
        {/* <Link href="/materials" as="/material-och-tvattrad"> */}
        <Link href="/material-och-tvattrad">
          <a>Material & Tvättråd</a>
        </Link>
      </UnderLinedMenu>
      {/* <Link href="/index" as="/"> */}
      <Link href="/index" as="/">
        <a>
          <StyledLogo src="/images/LogoTest4.png" alt="logo" />
        </a>
      </Link>
      <UnderLinedMenu>
        {/* <Link href="/vintagewiki" as="/vintagewiki"> */}
        <Link href="/vintagewiki">
          <a>VintageWiki</a>
        </Link>
        {/* <Link href="/about" as="/om-vintage-sverige"> */}
        <Link href="/om-vintage-sverige">
          <a>Om Vintage Sverige</a>
        </Link>
        <Link href="/logga-in">
          <a>Logga in</a>
        </Link>
      </UnderLinedMenu>
    </StyledNav>
  );
};

export default Nav;
