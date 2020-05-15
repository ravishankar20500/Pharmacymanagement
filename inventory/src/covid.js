

// export default inventory;
import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';


class Searchresult extends React.Component {
  constructor(props) {
    super(props);

    // setting initial state

    this.state = {
      Search_data: [], 
        orderdetail:false,
        orderplace:false,
      
    };
  }
  //alert box pop-up function
  orderFunction=(v)=>{
         let local=v;
            this.setState({ orderplace:true});
            confirmAlert({
              title: 'Confirm to submit',
              message: 'Are you sure to place order' ,
              buttons: [
                {
                  label: 'Yes',
                  
                },
                {
                  label: 'No',
                  
                }
              ]
            });
         
          }
        
  //returning to main refill page
  returnfunction=()=>{
    this.setState({orderplace:false});
    this.setState({orderdetail:false});
    console.log(this.state.orderdetail);
  }
  //directing to product details page
  componentDidMount = (v) => {
    this.setState({ orderdetail:true });
    console.log(this.state.orderdetail);
    fetch("https://api.covid19api.com/country/india/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z")
  .then(response => {
      console.log(response);
  })
  .catch(err => {
      console.log("kbdkad");
  });

  

    
};

  render() {
    let result=this.state.Search_data;
   const tablecss={
     width:"800px",
     height:"200px",
     margin: "auto",
     padding:"20px",
   }
    if(!this.state.orderdetail){
      return(
        //rendering main inventory
        <div>
          <div>
            <h3>Inventory</h3>
          </div>
          <div style={tablecss}>
  <ReactBootStrap.Table striped bordered hover > 
  <tr>
    <th>Id</th>
    <th>Storeid</th>
    <th>Order Placeddate</th>
    <th>Order Requireddate</th>
    <th>Is Full Filled</th>
    <th>Place an order</th>
  </tr>
  <tr>
    <td>1</td>
    <td>20</td>
    <td>20-06-2016</td>
    <td>28-06-2018</td>
    <td>28-06-2018</td>
   <td> <ReactBootStrap.Button variant="primary" onClick={() => this.componentDidMount(1)}> Details </ReactBootStrap.Button></td>
  </tr>
  <tr>
    <td>1</td>
    <td>20</td>
    <td>20-06-2016</td>
    <td>28-06-2018</td>
    <td>28-06-2018</td>
    
    <td> <ReactBootStrap.Button variant="primary" onClick={() => this.componentDidMount(1)}> Details </ReactBootStrap.Button></td>
  </tr>
</ReactBootStrap.Table> 
</div> 
 </div>
  );
    }
    else{
      //rendering products detail page
  return (
      <div style={tablecss}>
      <ReactBootStrap.Table striped bordered hover> 
  <thead>
  <tr>
    <th>product id</th>
    <th>product name</th>
    <th>Quantity</th>
    <th>place order</th>
  </tr>
  </thead>
  
   
  {result.map((result,ind ) => (
          <tr>
        <td>{result.id}</td>
    <td>{result.email}</td>
    <td>20</td>
    <td> <ReactBootStrap.Button variant="success" onClick={() => this.orderFunction(result.email)}> Order </ReactBootStrap.Button></td>
   </tr>
    ))}
  </ReactBootStrap.Table>   
   <ReactBootStrap.Button variant="danger" onClick={() => this.returnfunction()}> Return to Main Page </ReactBootStrap.Button>

  </div>
      
    );
  }
}

}

export default Searchresult;