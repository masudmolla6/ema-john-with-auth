import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { user, createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm)

        setError('');

        if (password !== confirm) {
            setError("Your Password Didn't Match");
            form.reset();
            return;
        }
        else if (password.length < 6) {
            setError("Password must be 6 digit or longer.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
            setError(error.message)
        })


    }
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                 type="password"
                 name="confirm"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                                <small>Already Have An Account? Please <Link to='/login' className='text-orange-500'>LogIn</Link></small>
                                <br />
                                <p>{ error}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;