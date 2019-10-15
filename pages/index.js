import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout';
import fetch from 'isomorphic-unfetch';

const StyledIndex = styled.div`
  font-weight: 600;
`;

const Index = props => {
  //Here we will fetch from Firebase later
  Index.getInitialProps = async function() {
    // const res = await fetch(
    //   "https://www.eventbriteapi.com/v3/events/search/?location.address=gothenburg&location.within=10km&token=3Y4CSNOSJ2GG2RK3UBW5"
    // );
    // const data = await res.json();
    // const events = data.events;
    // return {
    //   //   events: data.map(e => e.event)
    //   events
    // };
  };

  return (
    <StyledIndex>
      <Layout>
        <h1>Homepage</h1>
      </Layout>
    </StyledIndex>
  );
};

export default Index;
