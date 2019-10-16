import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import GlobalStyle from './styles/GlobalStyle';

const StyledLayout = styled.div``;

const Layout = props => {
  const { children } = props;
  return (
    <>
      <GlobalStyle />
      <StyledLayout>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <main>{children}</main>
      </StyledLayout>
    </>
  );
};

export default Layout;
