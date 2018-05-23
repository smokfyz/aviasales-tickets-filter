import React, { Component } from 'react';
import './Ticket.css';

class Ticket extends Component {
  render() {

    let {origin, origin_name, destination, destination_name, departure_date,
         departure_time, arrival_date, arrival_time, carrier, stops, price} = this.props.item;

    return (
      <div className="Ticket">
        <div className="Buy">
          <img className="Company-logo" src={"/img/" + this.props.item.carrier.toLowerCase() + ".png"}
               alt={this.props.item.carrier} />
          <button className="Button">Купить <br /> за {price} ₽</button>
        </div>
        <div className="Info">
          <div className="Arrive">
            <div className="Time">{arrival_time}</div>
            <div className="Place">{origin}, {origin_name}</div>
            <div className="Date">{arrival_date}</div>
          </div>
          <div className="Stops">
            <div className="Stops-num">{stops + " "} ПЕРЕСАДКИ</div>
            <div className="Plane"></div>
          </div>
          <div className="Departure">
            <div className="Time">{departure_time}</div>
            <div className="Place">{destination_name}, {destination}</div>
            <div className="Date">{departure_date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
