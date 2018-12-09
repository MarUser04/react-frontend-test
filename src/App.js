import React, { Component } from 'react';
import './App.css';

import Invoice from './components/invoice';
import Overview from './components/overview';
import DiagramMap from './components/diagram-map';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      invoice: {
        code: 'S03834754',
        number: '33-0092kk00',
        date: '7/31/18',
        dueDate: '7/31/18',
        terms: 'Net 0'
      },
      newBalance: 452.45,
      overview: {
        status: 'Active',
        method: 'Multimodal',
        capacity: 'LCL',
        drayage: 'Pickup, Delivery',
        incoterms: 'FOB',
        serviceOptions: 'Deconsolidation. Custom Clearance.',
        hazardousCommodities: 'Lithium Batteries, Hazmat, Other'
      }
    }
  }


  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={require("./assets/hexagon.png")} alt="" height="70"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link hover-item" href="#">Dashboard <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-item" href="#">Network</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-item" href="#">Network</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-item" href="#">Network</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-item" href="#">Network</a>
            </li>
            <li className="nav-item nt">
              <a className="nav-link hover-item" href="#">Network</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link hover-item" href="#">Billing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-item" href="#">Network</a>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse collapse menu-right">
          <ul className="navbar-nav ml-auto nav-right">
              <li className="nav-item">
                  <i className="fa fa-search"></i>
              </li>
              <li className="nav-item">
                <i className="far fa-question-circle"></i>
              </li>
              <li className="nav-item">
                <i className="fas fa-bell"></i>
              </li>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle borderItem" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                JS
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">Action</button>
                  <button className="dropdown-item" type="button">Another action</button>
                  <button className="dropdown-item" type="button">Something else here</button>
                </div>
              </div>
            </ul>
        </div>
      </nav>
      
      <Invoice invoice={this.state.invoice} newBalance={this.state.newBalance}/>
      <DiagramMap />
      <Overview overview={this.state.overview}/>

    </div>
    );
  }
}

export default App;
