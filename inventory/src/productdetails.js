

// export default inventory;
import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom'
import Route from "react-router-dom/Route";
import './forecast.css';
import detailspage from './details';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';




class Searchresult extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      result: [], 
      productt:[],
    
    };
  }
 
  componentDidMount(){
    console.log(this.props.match.params.id);  
    fetch("http://localhost:8081/ingredients")
    .then(response => response.json()).then(
        response=>{
            this.setState({
                isLoaded:true,
                result:response,
                productt:response[this.props.match.params.id],
            })
           console.log(this.state.productt);   

        }
        );
        
  
  }

  render() {
     let {productt}=this.state; 
    
  return (
   
 <div>
 
        <div> 
        <ReactBootStrap.Alert variant="success">
         <span ><h3><ReactBootStrap.Alert.Heading>Identification Number of Ingredient: </ReactBootStrap.Alert.Heading></h3> <h2>{productt.id}</h2></span><br/><br/><br/>
         </ReactBootStrap.Alert> 
         <ReactBootStrap.Alert variant="success">
        <span><h3><ReactBootStrap.Alert.Heading>Ingredient Name</ReactBootStrap.Alert.Heading></h3> <h2>{productt.name}</h2></span><br/><br/>
        </ReactBootStrap.Alert>     
        </div>
        <div>
           <ReactBootStrap.Alert variant="success">
         <span ><h1><ReactBootStrap.Alert.Heading>Description</ReactBootStrap.Alert.Heading></h1> {productt.description}</span><br/><br/><br/>
         </ReactBootStrap.Alert> 
        </div>
      
      </div>
);
 
  }
  


}

export default Searchresult;