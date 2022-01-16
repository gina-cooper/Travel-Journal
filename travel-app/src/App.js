import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, useNavigate, useLocation, useParams} from "react-router-dom";
import Navbar from "./components/navbar.component";
import ListLocations from "./components/list-locations.component";
import AddLocation from "./components/add-location.component";
import EditLocation from "./components/edit-location.component";
import CreateUser from "./components/create-user.component";

// function GetID() {
//     let {id} = useParams();
//     return <{id}/>;
// }

function App() {
  return (
    <Router>  
      <div className = "container">
      <Navbar />
      <Routes>
        {/* <Route path = "/" exact component={<ListLocations />} > </Route>
        <Route path = "/add"  component = {AddLocation } />
          <Route path = "/edit/:id"  component = { EditLocation } />
          <Route path = "/user"  component = {CreateUser } /> */}
          <Route path = "/"  element = {<ListLocations />} ></Route> 
          <Route path = "/add"  element = {<AddLocation />} ></Route>
          <Route path = "/edit/:id"  element = {< EditLocation />} ></Route>
          <Route path = "/user"  element = {<CreateUser />} ></Route>

      </Routes>
      </div> 
  </Router>

  );
}

export default App;























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
