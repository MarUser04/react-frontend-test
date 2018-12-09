import React, { Component } from 'react'
import './invoice.css';

export default class Invoice extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="invoice" >
        <div className="invoiceHeader">
          <h1>Invoice</h1>
          <div className="invoiceNumber">
           <div className="toolpit">
            <p><a href="#" data-tooltip="Invoice Number">{this.props.invoice.code}</a></p>
          </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h4>Invoice - Revision</h4>
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
                <span>{this.props.invoice.number}</span>
                <span>{this.props.invoice.date}</span>
                <span>{this.props.invoice.dueDate}</span>
                <span>{this.props.invoice.terms}</span>
              </div>
            </td>
            <td colSpan="3" className="billSpan">
              <span>Bill To</span>
            </td>
            <td>
              <div className="balanceSpan">
                <span>New Balance upon Re-booking</span>
                <span>${this.props.newBalance}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}