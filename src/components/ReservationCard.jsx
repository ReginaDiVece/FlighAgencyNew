import React, { useEffect, useState } from 'react';

import { styles } from '../assets';
import { flights, hotels } from '../utils';

const ReservationCard = (props) => {
  const { reservation, cancelActive, setCancelActive } = props;

  const [flightFound, setFlightFound] = useState(null);
  const [hotelFound, setHotelFound] = useState(null);

  useEffect(() => {
    const flightFound = flights.find(
      (flight) => flight.id === reservation.flightId
    );
    const hotelFound = hotels.find((hotel) => hotel.id === reservation.hotelId);

    setFlightFound(flightFound);
    setHotelFound(hotelFound);
  }, []);

  const handleClick = (reservationId) => {
    if (cancelActive) {
      const userAccount = JSON.parse(localStorage.getItem('account'));
      const usersList = JSON.parse(localStorage.getItem('accountsData'));

      const reservationIndex = userAccount.reservations.findIndex(
        (reservation) => reservation.reservationId === reservationId
      );

      const currentUserIndex = usersList.accounts.findIndex(
        (user) => user.email === userAccount.email
      );

      const currentUserInfo = {
        ...userAccount,
        reservations: [
          ...userAccount.reservations.slice(0, reservationIndex),
          ...userAccount.reservations.slice(reservationIndex + 1),
        ],
      };

      localStorage.setItem('account', JSON.stringify(currentUserInfo));

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

      setCancelActive(false);
    }
  };

  return (
    <div
      className="flight-card"
      onClick={() => handleClick(reservation.reservationId)}
    >
      <div className="flight-data-container">
        <h4>{reservation.flightName}</h4>
        <h5>{reservation.hotelName}</h5>
      </div>
      <div className="flight-data-container">
        <h5>
          <span className="helper-check">Date: </span>
          {flightFound?.date}
        </h5>
        <h5>
          <span className="helper-check">Schedule: </span>
          {flightFound?.schedule}
        </h5>
      </div>
      <div
        className="flight-data-container hotel-img-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <img className="flight-img" src={flightFound?.img} alt="" />
        <img
          className="hotel-img"
          style={{ marginLeft: 10 }}
          src={hotelFound?.img}
          alt=""
        />
      </div>
    </div>
  );
};

export default ReservationCard;
