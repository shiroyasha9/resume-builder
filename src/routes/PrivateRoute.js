import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn ? children : <Redirect to='/login' />;
      }}
    />
  );
};

export default PrivateRoute;
