import React, { Component } from 'react'
import './invoice.css';

export default class Invoice extends Component {
  render() {
    return (
      <div className="invoice" >
        <div className="invoiceHeader">
          <h1>Invoice</h1>
          <p className="invoiceNumber">S03834754</p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h4>INVOICE - REVISION</h4>
            </div>
          </div>
        </div>

        <table className="table table-bordered">
        <tbody>
          <tr>
            <td>
              <div className="info-left">
                <span>Invoice #</span>
                <span>Date</span>
                <span>Due Date</span>
                <span>Terms</span>
              </div>
              <div className="info-right">
                <span>33-0092kk00</span>
                <span>7/31/18</span>
                <span>7/31/18</span>
                <span>Net 0</span>
              </div>
            </td>
            <td colspan="3" className="billSpan">
              <span>Bill To</span>
            </td>
            <td>
              <div className="balanceSpan">
                <span>New Balance upon Re-booking</span>
                <span>$452.45</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}