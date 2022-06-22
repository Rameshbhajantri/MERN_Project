import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

function Wishlist()  {
  
  
    return (
      <div>
        <h1>Wishlist:</h1>
        {/* change code below this line /}
        ReactDOM.render(
          <TypesOfFood />, 
          document.getElementById('challenge-node'));
        <Fruits />
        <Vegetables />
        {/ change code above this line */}
      </div>
    );
  }

export default Wishlist;


