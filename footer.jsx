import React from 'react';
import './stylesheets/concert.css';
import FaAdjust from 'react-icons/lib/fa/adjust';

class Footer extends React.Component{
constructor() {
      super();
		
      this.state = {
         show:"none", 
         data:[
            {
                component:'ETH',
                USD:830.35,
                initialAmount:750.78
            },
             {
               component: 'DASH',
               USD: 1466.07,
               initialAmount:1400.07
            },
             {
               component: 'BTC',
               USD: 16911.79,
               initialAmount:16000
            },
             {
               component: 'XRP',
               USD: 0.8648,
               initialAmount:0.78
            },
            {
               component: 'BCH',
               USD: 3381.15,
               initialAmount:3200
            }
         ]
      }
    this.updateState = this.updateState.bind(this);
}
updateState() {
      if(this.state.show == "none"){
          this.setState({show:"flex"})
      }else{
          this.setState({show:"none"})
      }   
}      
render(){
    var myStyle = {
        display:this.state.show,
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop: "1%",
        width: "50%",
        marginLeft: "40%",
        backgroundColor: "white"
      }
    var button ={
        fontSize:"40px",
        padding:"5px"
    }
    return(
        <div className="container footer">
          <div className="row">
              <div class="col-lg-11">
                  <div style={myStyle}>
                    {this.state.data.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}            
            </div>
              </div>
              <div class="col-lg-1">
                  <a style={button} onClick={this.updateState}><FaAdjust /></a>
              </div>
          </div> 
        </div>
        
    );
}
}
class Content extends React.Component {
   render() {
      return (
         <div className="footerContent">
            <div className="name-container">
                {this.props.componentData.component}
            </div>           
           <div className="value-container">
               {this.props.componentData.USD} <span className="smallText">{((this.props.componentData.USD-this.props.componentData.initialAmount)/this.props.componentData.USD *100).toPrecision(3)}%</span>
           </div>
         </div>
      );
   }
}
export default Footer