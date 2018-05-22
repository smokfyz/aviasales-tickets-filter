import React, { Component } from 'react';
import Ticket from './Ticket';
import './TicketsList.css';

class TicketsList extends Component {
  render() {
    let tickets = this.props.tickets.map((item, index) => {
      return (
        <Ticket key={index} item={item} />
      );
    });

    return (
      <div className="TicketsList">
        {tickets}
      </div>
    );
  }
}

export default TicketsList;
