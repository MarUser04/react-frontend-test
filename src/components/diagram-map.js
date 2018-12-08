import React, { Component } from 'react'
import './diagram-map.css';

export default class DiagramMap extends Component {

  constructor(props){
    super(props)

    this.switchElement = this.switchElement.bind(this)

    this.state = {
      diagram: true,
      map: false
    }
  }

  switchElement(e) {
    if(e === 1){
      this.setState({
        diagram: true,
        map: false
      })
    } else {
      this.setState({
        diagram: false,
        map: true
      })
    }
    
  }

  render() {
    const Diagram =       
    <div className="diagram-image">
      <h5>Text</h5>
      <img src={require("./../assets/diagram.PNG")} alt=""/>
    </div>;

    const Map =     
    <div className="image-map">
      <img src={require("./../assets/map.jpg")} alt="" height="500"/>
    </div>;

    return (
      <div className="diagram-map"> 
        <div className="buttons">
           <button   onClick={() =>this.switchElement(1)} type="button" className="btn btn-outline-secondary">Diagram</button>
           <button   onClick={() =>this.switchElement(2)} type="button" className="btn btn-outline-secondary">Map</button>
        </div>
        <br/><br/><br/>
        <div className="content">
         <div>{this.state.diagram && Diagram }</div>
         <div>{this.state.map && Map }</div>
        </div>
      </div>
    )
  }
}