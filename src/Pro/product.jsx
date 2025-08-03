import { useNavigate } from "react-router-dom";
import data from "../assets/product/pro";
import data1 from "../assets/box/box";

function Pro() {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-8 space-y-10">
      {/* Section 1 */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center">Essential Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data &&
            data.map((value, index) => (
              <div
                key={index}
                onClick={() => navigate("product/" + value.id)}
                className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={value.img}
                  alt={value.name}
                  className="w-full h-40 object-contain mb-2"
                />
                <p className="text-sm font-medium">{value.name}</p>
                <button
                  className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-1 rounded-md text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Added to cart"); // fallback
                  }}
                >
                  Add To Cart
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-5">
        <h3 className="text-xl font-semibold mb-4 text-center ">Upto 50% Offer's</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {data1 &&
            data1.map((val, index) => (
              <div
                key={index}
                onClick={() => navigate("product/" + val.id)}
                className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={val.img}
                  alt={val.name}
                  className="w-full h-40 object-contain mb-2"
                />
                <p className="text-sm font-medium">{val.name}</p>
                <button
                  className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-1 rounded-md text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Add To Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Pro;
