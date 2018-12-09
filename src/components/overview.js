import React, { Component } from 'react'
import './overview.css';

export default class Overview extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="overview" >
        <h3>Overview</h3>
        <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="leftTd">
              <div className="info-left">
                <span>Status</span>
                <span>Method</span>
                <span>Capacity</span>
                <span>Drayage</span>
              </div>
              <div className="info-right">
                <span className="status"> &#10003; {this.props.overview.status}</span>
                <span>{this.props.overview.method}</span>
                <span>{this.props.overview.capacity}</span>
                <span>{this.props.overview.drayage}</span>
              </div>
            </td>
            <td>
            <div className="info-left">
                <span>Incoterms</span>
                <span>Service Options</span>
                <span>Hazardous or forbidden commodities</span>
              </div>
              <div className="info-right">
                <span>{this.props.overview.incoterms}</span>
                <span>{this.props.overview.serviceOptions}</span>
                <span>{this.props.overview.hazardousCommodities}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}