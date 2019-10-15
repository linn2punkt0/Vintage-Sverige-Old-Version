import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLayout = styled.div``;

const Layout = props => {
  const { children } = props;
  return (
    <StyledLayout>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
