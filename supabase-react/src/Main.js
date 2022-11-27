import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

export default Main;