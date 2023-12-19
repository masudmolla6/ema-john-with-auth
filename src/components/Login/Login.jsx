import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { user,logIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

        const location = useLocation();
    console.log(location);
    
    const from = location.state?.from?.pathname || '/';

        const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

            console.log(email, password);
            setError('');

            logIn(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
                    navigate(from, {replace:true});
                })
                .catch(error => {
                setError(error.message)
                })
            

        };
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <small>
                    Are You New? Please-
                    <Link to="/register" className="text-orange-500">
                      Register
                    </Link>
                  </small>
                  <br />
                  <p>{error}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">LoIn</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;