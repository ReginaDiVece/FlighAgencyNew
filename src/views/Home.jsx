import React from 'react';
import { useHistory } from 'react-router-dom';

import asset1 from '../assets/images/1.jpeg';
import asset2 from '../assets/images/2.jpeg';
import asset3 from '../assets/images/3.jpeg';
import asset4 from '../assets/images/4.jpeg';
import asset5 from '../assets/images/crucero.png';

import { styles } from '../assets';
import routes from '../routes/routes.json';

const Home = () => {
  const history = useHistory();
  return (
    <>
      <h1 className="home-title">
        Welcome to <span>Sun Kissed Travel</span>
      </h1>
      <div className="card-group home-container">
        <div style={{ marginBottom: 80 }}>
          <div
            className="card, display, card text-center home-card"
            style={{ width: '20rem' }}
            onClick={() => history.push(routes.flights)}
          >
            <img className="imgRedonda card-img-top" src={asset1} alt="..." />
            <div className="card-body">
              <h5 className="card-title">BORA BORA </h5>
              <button type="button" className="btn btn-light">
                Check it out!
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className="card, display, card text-center home-card"
            style={{ width: '20rem' }}
            onClick={() => history.push(routes.flights)}
          >
            <img className="imgRedonda card-img-top" src={asset2} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cancún </h5>
              <button type="button" className="btn btn-light">
                Don't miss it
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className="card, display, card text-center home-card"
            style={{ width: '20rem' }}
            onClick={() => history.push(routes.flights)}
          >
            <img className="imgRedonda card-img-top" src={asset3} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Queenstown </h5>
              <button type="button" className="btn btn-light">
                Book now!
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className="card, display, card text-center home-card"
            style={{ width: '20rem' }}
            onClick={() => history.push(routes.flights)}
          >
            <img className="imgRedonda card-img-top" src={asset4} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rome </h5>
              <button type="button" className="btn btn-light">
                Take a look!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="center">
        <img src={asset5} alt="add" width="1100" height="800" />
      </div>
    </>
  );
};

export default Home;
