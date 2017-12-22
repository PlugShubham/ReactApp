import React from 'react';
import ReactDOM from 'react-dom';
import Header from './App.jsx';
import SideBar from './sidebar.jsx';
import Main from './Main.jsx';
import Footer from './footer.jsx';
/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("app").innerHTML = myObj["ETH"]["USD"];
    }
};

xmlhttp.open("GET","http://localhost:8080/data.json",true);
xmlhttp.send();
*/
ReactDOM.render(<Header AccountCount="5" />,
                document.getElementById('app'));
ReactDOM.render(<SideBar/>,
                document.getElementById('demo'));
ReactDOM.render(<Main/>,
                document.getElementById('main'));
ReactDOM.render(<Footer/>,
                document.getElementById('footer'));

//https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH,BTC,XRP,BCH&tsyms=USD
//ETH,DASH,BTC,XRP,BCH