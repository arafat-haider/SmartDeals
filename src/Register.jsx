import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Styles specific to the Register component

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering user...', { name, email, imageUrl, password });
  };

  const handleGoogleSignUp = () => {
    console.log('Signing up with Google...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: '#E9E9E9', fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-2 text-black">Register Now!</h2>
        <p className="text-center text-gray-600 mb-6">
          Already have an account?{' '}
          <Link to="/login" className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:underline font-medium">
            Login Now
          </Link>
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-black">Name</span>
            </label>
            <input 
              type="text" 
              placeholder="Mariam Swarna" 
              className="w-full bg-white text-black placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:border-primary"
              style={{ border: '1px solid #E9E9E9' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>

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
              <span className="label-text font-medium text-black">Image-URL</span>
            </label>
            <input 
              type="url" 
              placeholder="https://example.com/image.jpg" 
              className="w-full bg-white text-black placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:border-primary"
              style={{ border: '1px solid #E9E9E9' }}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
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

          <button 
            type="submit" 
            className="btn bg-gradient-to-r from-primary to-secondary text-white border-none hover:opacity-90 w-full"
          >
            Register
          </button>
        </form>

        <div className="divider text-gray-500 font-medium">OR</div>

        <button 
          onClick={handleGoogleSignUp}
          className="btn btn-outline border-2 border-gray-300 hover:bg-gray-50 w-full flex items-center justify-center gap-3"
        >
          <img 
            src="https://www.google.com/favicon.ico" 
            alt="Google" 
            className="w-5 h-5"
          />
          <span className="text-black font-medium">Sign Up With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;