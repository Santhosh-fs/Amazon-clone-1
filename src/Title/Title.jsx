import datagad from "../assets/gad/Gad";
import gad from "../assets/gad/Gad1";
import cloth from "../assets/cloth/pro";
import { useNavigate } from "react-router-dom";

function Title() {
  const navigate=useNavigate();
    return (
    <div className="max-w-screen-xl mx-auto px-4 space-y-16 mb-5">

      {/* Gadgets & Fashion - Responsive Flex Layout */}
      <section className="flex flex-col md:flex-row gap-10">
        
        {/* Gadgets Section */}
        <div className="basis-full md:basis-1/2">
          <h3 className="text-xl font-semibold mb-4 text-center">Gadgets | Up to 55% off</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {datagad.map((item, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`product/${item.id}`)}
                className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img src={item.img} alt="Gadget" className="h-32 object-contain mb-3" />
                <p className="text-sm font-medium text-gray-800">{item.name}</p>
                <p className="text-yellow-600 font-semibold">${item.price}</p>
                <img src={item.rate} alt="rating" className="mt-2 w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* Fashion Section */}
        <div className="basis-full md:basis-1/2">
          <h3 className="text-xl font-semibold mb-4 text-center">Customer's Most-Loved Fashion for you</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {cloth.map((item, index) => (
              <div
                key={index}
                onClick={()=>navigate(`product/${item.id}`)}
                className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img src={item.img} alt="Fashion" className="h-32 object-contain mb-3" />
                <p className="text-sm font-medium text-gray-800">{item.name}</p>
                <p className="text-yellow-600 font-semibold">${item.price}</p>
                <img src={item.rate} alt="rating" className="mt-2 w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile & Accessories Section */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-center">Mobile's & Accessories | No Cost EMI*</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gad.map((v, idx) => (
            <div
              key={idx}
              onClick={()=>navigate(`product/${v.id}`)}
              className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <img src={v.img} alt="Mobile" className="h-32 object-contain mb-3" />
              <p className="text-sm font-medium text-gray-800">{v.name}</p>
              <p className="text-yellow-600 font-semibold">${v.price}</p>
              <img src={v.rate} alt="rating" className="mt-2 w-20" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Title;
