import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render(){
    return(
      <div>
        <Link to="/">Home</Link>
        <Link to="/omikuji">Omikuji</Link>
        <Link to="/shrine">Shrine</Link>
      </div>
    )
  }
}

export default Navigation;