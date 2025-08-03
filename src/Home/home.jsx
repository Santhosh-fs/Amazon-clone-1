import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import Pro from '../Pro/product';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';

import head1 from '../assets/head/header1.jpg';
import head2 from '../assets/head/header2.jpg';
import head3 from '../assets/head/header3.jpg';
import head4 from '../assets/head/header4.jpg';
import head5 from '../assets/head/header5.jpg';

import ban from '../assets/midban.png';
import ban1 from '../assets/midban1.png';

function Homesec() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Nav />

      <div className="overflow-y-scroll snap-x no-scrollbar  whitespace-nowrap scrollbar-hide">
        <div className="flex gap-4">
          {[head1, head2, head3, head4, head5].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`banner-${i}`}
              className="w-screen h-[300px] object-cover rounded-none"
            />
          ))}
        </div>
      </div>

      <div className="my-6 px-4">
        <Title />
      </div>

      <div className="w-100">
        <img
          src={ban}
          alt="Main Banner"
          className="w-100 h-60"
        />
      </div>

      {/* Products */}
      <div className="px-4 py-8">
        <Pro />
      </div>

      {/* Second Full-Width Banner */}
      <div className="w-full mt-6">
        <img
          src={ban1}
          alt="Secondary Banner"
          className="w-full h-60 "
        />
      </div>

      {/* Sign In CTA */}
      <div className="bg-white mx-4 my-8 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-lg font-semibold mb-3">See personalized recommendations</h3>
        <Link
          to="/login"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-md transition"
        >
          Sign In
        </Link>
        <p className="mt-2 text-sm text-gray-600">New User? <Link to="/signup" className="underline hover:text-yellow-600">Start here</Link>.</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homesec;
