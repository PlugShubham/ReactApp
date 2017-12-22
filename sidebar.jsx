import React from 'react';
import './stylesheets/concert.css';
import GoCreditCard from 'react-icons/lib/go/credit-card';
import MdAddBox from 'react-icons/lib/md/add-box';
import GoGear from 'react-icons/lib/go/gear';
import FaAreaChart from 'react-icons/lib/fa/area-chart';
import FaExchange from 'react-icons/lib/fa/exchange';

class SideBar extends React.Component{
render(){
    
    return(
        <div className="sidenav">
              <a href="#"><GoCreditCard /></a>
              <a href="#"><FaExchange /></a>
              <a href="#"><MdAddBox /></a>
              <a href="#"><FaAreaChart /></a>
              <a href="#"><GoGear /></a>
        </div>
    );
}
}
export default SideBar