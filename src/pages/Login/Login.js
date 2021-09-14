import React from 'react';
import { useHistory } from 'react-router';

const Login = ({ login }) => {
  const history = useHistory();
  const loginHandler = () => {
    login();
    history.push(`/`);
  };

  return (
    <div>
      <h1 className='text-green-700 font-bold text-6xl mb-8'>Login</h1>
      <button
        className='bg-purple-500 p-3 text-white rounded-3xl hover:bg-purple-800'
        onClick={() => loginHandler()}
      >
        Click me to login
      </button>
    </div>
  );
};

export default Login;
