import logob from "../assets/amazon_logo_dark.png";
import nation from "../assets/ind.png";

function Foot() {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10 mt-10">
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Section 1 */}
        <div>
          <h4 className="text-base font-semibold mb-3">Get to Know Us</h4>
          <ul className="space-y-2">
            <li>About Amazon</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h4 className="text-base font-semibold mb-3">Connect with Us</h4>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h4 className="text-base font-semibold mb-3">Make Money with Us</h4>
          <ul className="space-y-2">
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Supply to Amazon</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h4 className="text-base font-semibold mb-3">Let Us Help You</h4>
          <ul className="space-y-2">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t bg-gray-600 border-gray-700 pt-2 flex flex-col md:flex-row items-center justify-around gap-4">
        {/* Logo */}
        <img src={logob} alt="Amazon Logo" className="h-8" />

        {/* Region Selector */}
        <div className="flex items-center space-x-2">
          <img src={nation} alt="Flag" className="h-6 w-8 object-cover" />
          <p className="text-sm text-green-400 pt-3">India</p>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
