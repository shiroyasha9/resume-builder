import './App.css';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Switch>
        <PrivateRoute path='/' exact isLoggedIn={isLoggedIn}>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path='/login' exact>
          <Login login={() => setIsLoggedIn(true)} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
