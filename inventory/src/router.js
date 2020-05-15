

// export default inventory;
import React, {Component} from "react";
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Route from "react-router-dom/Route";


const User = ({match}) => {
return (<h1> User details {match.params.username}</h1>)
}


class Searchresult extends Component {
  
  render() {
return(
    <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
<Route path="/" exact strict render={
    ()=>{
        return(<h1>Welcome Home</h1>)
    }
}/>
<Route path="/about" exact strict render={
    ()=>{
        return(<h1>Welcome</h1>)
    }
}/>
<Route path="/user/:username" exact strict component={User}/>
</div>
    </Router>
    
);
  }
  
}



export default Searchresult;