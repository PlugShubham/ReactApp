import React from 'react';
import './stylesheets/concert.css';
import FaSearch from 'react-icons/lib/fa/search';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square-o';
class Main extends React.Component{
    constructor() {
      super();
		
      this.state = {
         count :0, 
         accounts:[
            {
                component:'ETH',
                USD:830.35,
                name:"Michael Bob",
                type:"BitG",
                card:"MCGD6767XXXX",
                initialAmount:50,
                currentAmont:106.89,
                orders:3763
            },
             {
               component: 'DASH',
               USD: 1466.07,
                type:"BitRex",
               name:"Michael Bob",
               card:"1200KIUHXXXX",
               initialAmount:280,
               currentAmont:598.45,
                orders:376
            },
             {
               component: 'BTC',
               USD: 16911.79,
                type:"BitPlay",
               name:"Michael Bob",
               card:"3300MM67XXXX",
               initialAmount:80,
               currentAmont:123.56,
                orders:2363
            },
             {
               component: 'XRP',
               USD: 0.8648,
               type:"Bcoin",
               name:"Michael Bob",
               card:"BOLJ0067XXXX",
               initialAmount:190,
               currentAmont:390.5,
                orders:236
            },
            {
               component: 'BCH',
               USD: 3381.15,
                type:"GEM",
               name:"Michael Bob",
               card:"NMKH4757XXXX",
               initialAmount:60,
               currentAmont:178.54,
                orders:263
            }
         ]
      }
    this.updateState = this.updateState.bind(this); 
    this.updateState1 = this.updateState1.bind(this); 
    this.updateState2 = this.updateState2.bind(this); 
    this.updateState3 = this.updateState3.bind(this); 
    this.updateState4 = this.updateState4.bind(this);     
} 
updateState() {
      this.setState({count:0})
    }    
updateState1() {
      this.setState({count:1})
    } 
updateState2() {
      this.setState({count:2})
    } 
updateState3() {
      this.setState({count:3})
    } 
updateState4() {
      this.setState({count:4})
    }    
render(){
    return(
        <div>
           <div className="balance-box">
               <Balance componentData = {this.state.accounts[this.state.count]}/>
           </div>
            <div className="account-box">
                <h4>My Accounts   <FaSearch /></h4>
                <div>
                  <ul className="pagination">
                  <li><a href="#" onClick={this.updateState}>1</a></li>
                  <li><a href="#" onClick={this.updateState1}>2</a></li>
                  <li><a href="#" onClick={this.updateState2}>3</a></li>
                  <li><a href="#" onClick={this.updateState3}>4</a></li>
                  <li><a href="#" onClick={this.updateState4}>5</a></li>
                </ul>  
                </div>
            </div>
               <Card componentData = {this.state.accounts[this.state.count]}/>)} />
               
         </div>
        
    );
}
}

class Card extends React.Component{
    render(){
        return(
            <div className="cardDetails">
                <div className="cardTitle">{this.props.componentData.type}</div>
                <div className="cardNo">{this.props.componentData.card}</div>
                <div className="flex-container">
                    <div>{this.props.componentData.component+"/USD"}</div>
                    <div>{this.props.componentData.name}</div>
                </div>
            </div>
        );
    }
}
class Balance extends React.Component{
    render(){
        return(
            <div className="balDetails">
                <h3>Balance</h3>
                <div className="container balance">
                    <div className="row">
                        <div className="col-lg-6">{this.props.componentData.component} <span className="largeFont">{this.props.componentData.currentAmont}</span></div>
                        <div className="col-lg-6"><button className="balButton"><FaArrowUp /> sell</button><button className="balButton"><FaArrowDown /> buy</button><button className="balButton"><FaPlusSquareO /> order</button></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">$ {this.props.componentData.currentAmont * this.props.componentData.USD}<span className="text-success">  {((this.props.componentData.currentAmont -this.props.componentData.initialAmount)/this.props.componentData.currentAmont * 100).toPrecision(4)}%</span> </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-lg-6">Your today revenue</div>
                        <div className="col-lg-6">Current order volume</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">+ $ <span className="largeFont">{(this.props.componentData.currentAmont - this.props.componentData.initialAmount).toPrecision(4)}</span></div>
                        <div className="col-lg-6">$ <span className="largeFont">{this.props.componentData.orders}</span></div>
                    </div>
                </div>
                <br/>
                <div>
                    <h5>Etherium Charts +{this.props.componentData.component}/USD</h5>
                </div>
            </div>
        );
    }
}


export default Main