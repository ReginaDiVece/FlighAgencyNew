import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { styles } from '../assets';
import routes from '../routes/routes.json';

const Signup = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (logged) {
      if (localStorage.getItem('accountsData')) {
        const accountsHistory = JSON.parse(
          localStorage.getItem('accountsData')
        );

        const userFound = accountsHistory.accounts.find(
          (user) => user.email === email
        );

        if (userFound) {
          setError('The email already exist!');
          setLogged(false);
          return;
        }

        accountsHistory.accounts.push({ name, email, password });

        localStorage.setItem('accountsData', JSON.stringify(accountsHistory));
      } else {
        localStorage.setItem(
          'accountsData',
          JSON.stringify({ accounts: [{ name, email, password }] })
        );
      }

      localStorage.setItem(
        'account',
        JSON.stringify({ name, email, password })
      );

      history.push(routes.account);
    } else {
      setLogged(false);
    }
  }, [logged]);

  const dataValidation = () => {
    if (name === '') {
      setLogged(false);
      setError('Please add the name!');
      return;
    }

    if (email === '') {
      setLogged(false);
      setError('Please add an email!');
      return;
    }

    if (password === '') {
      setLogged(false);
      setError('Please add the password!');
      return;
    }

    setLogged(true);
  };

  return (
    <main className="form-signin">
      <form>
        <h1 className="h3 mb-3 fw-normal" style={{ textAlign: 'center' }}>
          Create New Account
        </h1>
        {error !== '' && <h5 className="error-message">{error}</h5>}
        <div className="form-container">
          <div className="form-floating form">
            <h4 className="form-title">Name</h4>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <h4 className="form-title">Email Address</h4>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className="form-title">Password</h4>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-warning button-auth"
            type="button"
            onClick={dataValidation}
          >
            Sing Up
          </button>
          <p className="suggestion" onClick={() => history.push(routes.login)}>
            Already have an account? Login
          </p>
        </div>
      </form>
    </main>
  );
};

export default Signup;
