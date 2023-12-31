import axios from 'axios';
import {useState, useContext} from 'react';
import AuthContext from '../store/authContext';

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);

  const authCtx = useContext(AuthContext)

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
        username,
        password
    }
        const url = 'http://localhost:4545'

    axios.post(register ? `${url}/register` : `${url}/login`, body)
        .then((res) => {
            console.log('AFTER AUTH', res)
            authCtx.login(res.data.token, res.data.exp, res.data.userId)
        })
        .catch(err => {
            setPassword('')
            setUsername('')
        })
};
  
  return (
    <main>
      <h1>Welcome to Nirvana</h1>
      <form className="form auth-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <button className="form-btn">{register ? "Sign Up" : "Login"}</button>
      <button className="form-btn" onClick={() => setRegister(!register)}>
        Need to {register ? "Login" : "Sign Up"}?
      </button>
      </form>
    </main>
  );
};

export default Auth;
