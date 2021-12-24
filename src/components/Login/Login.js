import './Login.css'
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import { handelFacebookbSignIn, handleCreateUserWithEmailPassword, handleGoogleSignIn, handleGoogleSignOut, handleSignInWithEmailPassword, initilizedLogin } from './manageLogin';
import './Login.css'
function Login() {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  });

  initilizedLogin();

  const [logedInUser, setLogedInUser] = useContext(UserContext)

  const navigate = useNavigate()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/shop" } };

  const [newUser, setNewUser] = useState(false);

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        setUser(res);
        setLogedInUser(res)
        // console.log(res)
        navigate(from)
      })

  };

  const googleSignOut = () => {
    handleGoogleSignOut()
      .then(res => {
        setUser(res);
        setLogedInUser(res)
      })
  };
  const facebookbSignIn = () => {
    handelFacebookbSignIn()
      .then(res => {
        setUser(res)
        setLogedInUser(res)
        navigate(from)
      })
  }

  const handleBlur = event => {
    // console.log(event.target.name, event.target.value);
    let isFormValid;
    if (event.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPassWordValid = event.target.value.length >= 6;
      const passHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPassWordValid && passHasNumber;

    }
    if (event.target.name === "name") {
      isFormValid = true;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo)
    }

  };

  const handleFormSubmit = (e) => {

    if (newUser && user.email && user.password) {
      handleCreateUserWithEmailPassword(user.email, user.name, user.password)
        .then(res => {
          setUser(res);
          console.log(res)
          setLogedInUser(res);

        })


    };

    // for sign in with email and password 
    if (!newUser && user.email && user.password) {
      handleSignInWithEmailPassword(user.email, user.password)
        .then(res => {
          setUser(res);

          setLogedInUser(res);
          console.log(logedInUser)
          navigate(from)
        })
    }
    e.preventDefault()
  };

  return (
    <div className="main">
      
  {
  <div className="own-auth-div">
          <button onClick={() => setNewUser(!newUser)} className='create-account' > Create A account </button>
          <br />
          <br />
          <form className='login-form' onSubmit={handleFormSubmit}>
            {
              newUser && <div>
              <input onBlur={handleBlur} type="text" name="name" placeholder="First name" className='login-form-input' />
              <input type="text" name="name" placeholder="Last name" className='login-form-input' />

              </div>

            }
            <br />


            <input onBlur={handleBlur} type="text" name="email" placeholder="your Email" required className='login-form-input' />   <br />

            <input onBlur={handleBlur} type="password" name="password" placeholder="your password" required className='login-form-input' />
            <br />
            {
              newUser ? <input className='submit-button' type="submit" value="Sign Up" /> :
                <input className='submit-button' type="submit" value="Sign In" />

            }
          </form>
          <p style={{ color: 'red' }}>{user.error}</p>

          {
            newUser && user.success && <h5 style={{ color: 'green' }}>Successfully Created A User With {user.email}</h5>
          }
          {
            !newUser && user.success && <h5 style={{ color: 'green' }}>Successfully Login A User With {user.email}</h5>
          }

        </div>
      }

      <button onClick={facebookbSignIn} className='facebook-login-btn' >Login  with using Facebook</button>
      {
        user.isSignedIn ? <button onClick={googleSignOut} style={{ backgroundColor: "red", padding: "20px 55px", borderRadius: "5px", color: "white" }}> Sign Out </button>
          :
          <button onClick={googleSignIn} className='google-signIN' > Sign In with google </button>
      }
    </div>
  );
}

export default Login;
