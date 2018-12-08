import React, { Component } from 'react'
import './overview.css';

export default class Overview extends Component {
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
                <span>Darayge</span>
              </div>
              <div className="info-right">
                <span className="status"> &#10003; Active</span>
                <span>Multimodal</span>
                <span>LCL</span>
                <span>Pickup, Delivery</span>
              </div>
            </td>
            <td>
            <div className="info-left">
                <span>Incoterms</span>
                <span>Service Options</span>
                <span>Hazardous of forbidden commodities</span>
              </div>
              <div className="info-right">
                <span>FOB</span>
                <span>Deconsolidation. Custom Clearance.</span>
                <span>Lithium Batteries, Hazmat, Other</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}