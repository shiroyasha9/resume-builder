import './App.css';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { useState } from 'react';
import AboutUs from './pages/AboutUs/AboutUs';

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
        <Route path='/about' exact>
          <AboutUs></AboutUs>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
