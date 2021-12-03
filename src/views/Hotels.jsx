import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { hotels } from '../utils';
import routes from '../routes/routes.json';

const Hotels = () => {
  const location = useLocation();
  const history = useHistory();

  const [currentReservation, setCurrentReservation] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (location.state) {
      const userAccount = JSON.parse(localStorage.getItem('account'));

      const reservationFound = userAccount.reservations.find(
        (reservation) =>
          reservation.reservationId === location.state.reservationId
      );

      setCurrentReservation(reservationFound);

      setError('Select the hotel for your flight');
    }
  }, [location]);

  const addHotel = (hotel) => {
    const userAccount = JSON.parse(localStorage.getItem('account'));

    if (!userAccount) {
      history.push(routes.login);
      return;
    }

    if (currentReservation.flightId !== hotel.flightAvailable) {
      setError('Please select a valid hotel for the flight');
      return;
    }

    const reservationIndex = userAccount.reservations.findIndex(
      (reservation) =>
        reservation.reservationId === currentReservation.reservationId
    );

    const currentUserInfo = {
      ...userAccount,
      reservations: [
        ...userAccount.reservations.slice(0, reservationIndex),
        {
          ...userAccount.reservations[reservationIndex],
          hotelName: hotel.name,
          hotelId: hotel.id,
        },
        ...userAccount.reservations.slice(reservationIndex + 1),
      ],
    };

    localStorage.setItem('account', JSON.stringify(currentUserInfo));

    const usersList = JSON.parse(localStorage.getItem('accountsData'));
    const currentUserIndex = usersList.accounts.findIndex(
      (user) => user.email === userAccount.email
    );

    localStorage.setItem(
      'accountsData',
      JSON.stringify({
        accounts: [
          ...usersList.accounts.slice(0, currentUserIndex),
          {
            ...currentUserInfo,
          },
          ...usersList.accounts.slice(currentUserIndex + 1),
        ],
      })
    );

    setError('');
    history.push(routes.account);
  };

  return (
    <div className="hotels-container">
      <h1 className="hotels-title">Hotels Available</h1>
      {error !== '' && <h5 className="error-message">{error}</h5>}
      {hotels.map((hotel, index) => (
        <div className="hotel-card" key={index} onClick={() => addHotel(hotel)}>
          <div className="hotel-data-container">
            <h4>{hotel.name}</h4>
            <h5 className="all-inclusive">
              {hotel.allInclusive && 'All Inclusive'}
            </h5>
          </div>
          <div className="hotel-data-container hotel-date">
            <h5>
              <span className="helper-check">Check In:</span> {hotel.checkIn}
            </h5>
            <h5>
              <span className="helper-check">Check Out:</span> {hotel.checkOut}
            </h5>
            <h5>
              <span className="helper-check">Price: </span>
              {hotel.price}
            </h5>
          </div>
          <div className="hotel-data-container hotel-img-container">
            <img className="hotel-img" src={hotel.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
