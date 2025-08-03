import { useState } from 'react';
import logolog from '../assets/amazon_logo_dark.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState('');

  const inputval = (e) => {
    setData(e.target.value.trim());
  };

  const handlebtn = () => {
    if (data) {
      if (data === '4') {
        alert("Enter a valid Email");
        return;
      }
      alert("Successfully signed in!");
      setTimeout(() => {
        navigate("/");
      }, 100);
    } else {
      alert("Please enter an email or mobile number.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Logo */}
      <img src={logolog} alt="Amazon Logo" className="w-32 mb-6" />

      {/* Login Card */}
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <h3 className="text-xl font-semibold mb-4">Sign in or create account</h3>
        
        <form className="mb-4">
          <label htmlFor="emailpass" className="block text-sm font-medium text-gray-700 mb-1">
            Enter mobile number or email
          </label>
          <input
            type="email"
            onChange={inputval}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </form>

        <button
          onClick={handlebtn}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 rounded-md transition duration-200"
        >
          Continue
        </button>

        <div className="text-xs text-gray-600 mt-4">
          <p>
            By continuing, you agree to Amazon's{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"
              className="text-blue-600 hover:underline"
            >
              Conditions of Use
            </a>
          </p>
        </div>

        <hr className="my-5" />

        <div className="text-sm">
          <p className="font-medium mb-1">Buying for work?</p>
          <a href="#" className="text-blue-600 hover:underline">
            Create a Business Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
