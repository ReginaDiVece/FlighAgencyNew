import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { flights } from '../utils';
import routes from '../routes/routes.json';

const Flights = () => {
  const history = useHistory();

  const [newReservation, setNewReservation] = useState(null);

  const addFlight = (flight) => {
    const userAccount = JSON.parse(localStorage.getItem('account'));

    if (!userAccount) {
      history.push(routes.login);
      return;
    }

    const userReservations = userAccount.reservations;

    if (userReservations) {
      let reservation = {
        reservationId: userReservations.length,
        flightId: flight.id,
        flightName: flight.name,
        hotelId: '',
        hotelName: '',
      };

      userReservations.push(reservation);

      localStorage.setItem(
        'account',
        JSON.stringify({
          ...userAccount,
          reservations: userReservations,
        })
      );
      setNewReservation(reservation);
    } else {
      let reservation = {
        reservationId: 0,
        flightId: flight.id,
        flightName: flight.name,
        hotelId: '',
        hotelName: '',
      };

      localStorage.setItem(
        'account',
        JSON.stringify({
          ...userAccount,
          reservations: [reservation],
        })
      );
      setNewReservation(reservation);
    }
  };

  useEffect(() => {
    if (newReservation) {
      history.push({
        pathname: routes.hotels,
        state: newReservation,
      });
    }
  }, [newReservation, history]);

  return (
    <div className="flights-container">
      <h1 className="flights-title">Flights Available</h1>
      {flights.map((flight, index) => (
        <div
          className="flight-card"
          key={index}
          onClick={() => addFlight(flight)}
        >
          <div className="flight-data-container">
            <h4>{flight.name}</h4>
            <h5>{flight.company}</h5>
          </div>
          <div className="flight-data-container flight-date">
            <h5>
              <span className="helper-check">Date: </span>
              {flight.date}
            </h5>
            <h5>
              <span className="helper-check">Schedule: </span>
              {flight.schedule}
            </h5>
            <h5>
              <span className="helper-check">Price: </span>
              {flight.price}
            </h5>
          </div>
          <div className="flight-data-container flight-img-container">
            <img className="flight-img" src={flight.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flights;
