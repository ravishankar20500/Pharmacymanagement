

// export default inventory;
import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom'
import Route from "react-router-dom/Route";
import productt from './productdetails';
import './forecast.css';

const Details = ({match}) => {
  return (<h1> User details {match.params.username}</h1>)

  }
  
   


class Searchresult extends React.Component {
  constructor(props) {
    super(props);

    // setting initial state

    this.state = {
        isLoaded:false,
      result: [], 
      detailss:false,
    
    };
  }
  
  //alert box pop-up function
  
  //returning to main refill page
  
  //directing to product details page
 
  componentDidMount(){
    
    fetch("http://localhost:8081/ingredients")
  .then(response => response.json()).then(
      response=>{
          this.setState({
              isLoaded:true,
              result:response,
          })
        console.log(this.state.result);  
      }
  );
  
  }
  // deletefunction=(id)=>{
  //   if(window.confirm('Are you Sure?')){
  //   fetch('http://localhost:8081/ingredient/'+id,{
  //     method:'DELETE',
  //     header:{'Accept':'application/json',
  //     'Content-Type':'application/json'
  //   }
  //   }
  
  //   )
  //   window.location.reload(false);

  // }
  //} 
  submit = (id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            fetch('http://localhost:8081/ingredient/'+id,{
      method:'DELETE',
      header:{'Accept':'application/json',
      'Content-Type':'application/json'
    }
    }
  
    )
    window.location.reload(false);
          }
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  };

  render() {
    let song = this.state.result;
 let {isLoaded, result, detailss}=this.state; 
 const tablecss={
  width:"800px",
  height:"200px",
  margin: "auto",
  padding:"50px",
}  
     if(!isLoaded){
        return <div>
             Loading
         </div>
     }
     else{
       if(!detailss){
          
  return (
      <Router>
     <div style={tablecss}>
     {/* <ReactBootStrap.Button variant="primary" onClick={() => this.setState({ detailss:3})} style={{color: 'white'}}><span style={{color: 'white'}}>Create Ingredient</span></ReactBootStrap.Button> */}
           
     <ReactBootStrap.Table striped bordered hover > 
  <thead>
    <tr>
      <th>Id of ingredient</th>
      <th>Name of ingredient</th>
      <th>Details</th>
      <th>Delete</th>
    </tr>
   </thead>
   <tbody>
   {result.map(item=>( <tr>
       <td>{item.id}</td>
       <td>{item.name}</td>
       <td><ReactBootStrap.Button variant="success" onClick={() => this.setState({ detailss:2})} style={{color: 'white'}}><a href={`/details/${item.id}`} target="_blank" class="link"><span style={{color: 'white'}}>Details</span></a> </ReactBootStrap.Button></td>
       <td><ReactBootStrap.Button variant="danger" onClick={() => {this.submit(item.id)}} style={{color: 'white'}}><span style={{color: 'white'}}>Delete</span></ReactBootStrap.Button></td>
     </tr>
   ))}
     </tbody>
     </ReactBootStrap.Table>
            </div>
            </Router>
    

  )
  
 }
      else{
        return(
       
            <Router>
        <div>    
    <Route path="/details/:id" exact strict component={productt} />
   </div>
    </Router>
     
        );
      }
     
  }
  
}

}

export default Searchresult;