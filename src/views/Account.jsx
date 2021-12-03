import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import routes from '../routes/routes.json';
import { styles } from '../assets';
import { ReservationCard } from '../components';

const Account = () => {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState(null);
  const [reservations, setReservations] = useState(null);
  const [cancelActive, setCancelActive] = useState(false);

  useEffect(() => {
    const account = localStorage.getItem('account');

    if (!account) {
      history.push(routes.home);
    } else {
      setCurrentUser(JSON.parse(account));
    }
  }, [cancelActive]);

  useEffect(() => {
    if (currentUser) {
      const userReservations = currentUser.reservations;

      setReservations(userReservations);
    }
  }, [currentUser]);

  const createReservation = () => {
    history.push(routes.flights);
  };

  const logOut = () => {
    localStorage.removeItem('account');
    history.push(routes.home);
  };

  return (
    <div>
      <h1 className="account-title">Welcome back: {currentUser?.name}</h1>
      <div className="actions-container">
        <button className="create-reservation" onClick={createReservation}>
          Create Reservation
        </button>
        <button
          className={
            cancelActive ? 'cancel-reservation-active' : 'cancel-reservation'
          }
          onClick={() => setCancelActive(!cancelActive)}
        >
          Cancel Reservation
        </button>
        <button className="log-out" onClick={logOut}>
          Log Out
        </button>
      </div>
      <div className="reservations-container" style={{ marginTop: 50 }}>
        {reservations && reservations.length !== 0 ? (
          reservations?.map((reservation, index) => (
            <ReservationCard
              key={index}
              reservation={reservation}
              cancelActive={cancelActive}
              setCancelActive={setCancelActive}
            />
          ))
        ) : (
          <h3 className="error-message">You don't have any reservation yet</h3>
        )}
      </div>
    </div>
  );
};

export default Account;
