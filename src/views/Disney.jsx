import React from 'react';

import mickey from '../assets/images/mickey.jpeg';
import magicKingdom from '../assets/images/magicKingdom.jpeg';
import epcot from '../assets/images/epcot.jpeg';
import animal from '../assets/images/animal.jpeg';
import studios from '../assets/images/studios.jpeg';

const Disney = () => {
  return (
    <>
      <div className="center">
        <img
          src={mickey}
          alt="add"
          width="900"
          height="500"
          border-radius="25px"
        />
      </div>
      <div className="card-group">
        <div className="card">
          <div
            className="card, display, card text-center"
            style={{ width: '20rem' }}
          >
            <img
              className="imgRedonda card-img-top"
              src={magicKingdom}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Magic Kingdom </h5>
              <button type="button" className="btn btn-light">
                Buy tickets!
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="card, display, card text-center"
            style={{ width: '20rem' }}
          >
            <img className="imgRedonda card-img-top" src={epcot} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Epcot </h5>
              <button type="button" className="btn btn-light">
                Buy Tickets!
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="card, display, card text-center"
            style={{ width: '20rem' }}
          >
            <img className="imgRedonda card-img-top" src={animal} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animal Kingdom </h5>
              <button type="button" className="btn btn-light">
                Buy Tickets!
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="card, display, card text-center"
            style={{ width: '20rem' }}
          >
            <img className="imgRedonda card-img-top" src={studios} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hollywood Studios</h5>
              <button type="button" className="btn btn-light">
                Buy Tickets!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disney;
