import LoginContext from './login-context';

const LoginProvider = (props) => {

  const loginContext = {
    isLoggedIn: false,
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
