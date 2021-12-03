import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { styles } from '../assets';
import routes from '../routes/routes.json';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (logged) {
      const accountsHistory = JSON.parse(localStorage.getItem('accountsData'));

      if (!accountsHistory) {
        setError('User Not Found!');
        setLogged(false);
        return;
      }

      const userFound = accountsHistory.accounts.find(
        (user) => user.email === email
      );

      if (!userFound) {
        setError('User Not Found!');
        setLogged(false);
        return;
      }

      if (userFound.password !== password) {
        setError('Password Error!');
        setLogged(false);
        return;
      }

      const nameFound = userFound.name;
      const emailFound = userFound.email;
      const passwordFound = userFound.password;

      localStorage.setItem(
        'account',
        JSON.stringify({
          ...userFound,
          name: nameFound,
          email: emailFound,
          password: passwordFound,
        })
      );
      history.push(routes.account);
    } else {
      setLogged(false);
    }
  }, [logged]);

  const dataValidation = () => {
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
          Please sign in
        </h1>
        {error !== '' && <h5 className="error-message">{error}</h5>}
        <div className="form-container">
          <div className="form-floating form">
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
            Sing in{' '}
          </button>
          <p className="suggestion" onClick={() => history.push(routes.signup)}>
            Create an Account
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
