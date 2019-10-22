import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import 'isomorphic-unfetch';
import Ribbon from '../components/Ribbon';

const Index = ({ user }) => {
  return (
    <>
      <h2>Startsidan</h2>
      {user ? <h2>Du är inloggad</h2> : <h2>Du är inte inloggad</h2>}
      <Ribbon />
    </>
  );
};

export default Index;
