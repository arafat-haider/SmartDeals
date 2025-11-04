import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const defaultUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(defaultUser);
  };

  const handleGoogleLogin = () => {
    setUser(defaultUser);
  };

  const handleLogout = () => {
    setUser(null);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: '#E9E9E9', fontFamily: 'Inter, sans-serif' }}>
      {user ? (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Welcome back, {user.name}!</h2>
          <p className="text-gray-600 mb-6">You are logged in as {user.email}.</p>
          <button 
            onClick={handleLogout} 
            className="btn bg-gradient-to-r from-primary to-secondary text-white border-none hover:opacity-90 w-full"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-center mb-2 text-black">Login</h2>
          <p className="text-center text-gray-600 mb-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:underline font-medium">
              Register Now
            </Link>
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-black">Email</span>
              </label>
              <input 
                type="email" 
                placeholder="smsowkothasan@gmail.com" 
                className="w-full bg-white text-black placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:border-primary"
                style={{ border: '1px solid #E9E9E9' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-black">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="••••••••••••" 
                className="w-full bg-white text-black placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:border-primary"
                style={{ border: '1px solid #E9E9E9' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
                Forgot password?
              </Link>
            </div>

            <button 
              type="submit" 
              className="btn bg-gradient-to-r from-primary to-secondary text-white border-none hover:opacity-90 w-full"
            >
              Sign In
            </button>
          </form>

          <div className="divider text-gray-500 font-medium">OR</div>

          <button 
            onClick={handleGoogleLogin}
            className="btn btn-outline border-2 border-gray-300 hover:bg-gray-50 w-full flex items-center justify-center gap-3"
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-5 h-5"
            />
            <span className="text-black font-medium">Sign In With Google</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;