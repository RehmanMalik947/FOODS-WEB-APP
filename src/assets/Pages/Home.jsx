import { useContext } from "react";
import Nav from "../Components/Nav";
import categories from "./Category";
import Card from "../Components/Card";
import { food_items } from "./food";
import { dataContext } from "../../ContextApi/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaCrown, FaShoppingBasket } from "react-icons/fa";

function Home() {
  const { Food_items, setFoodItems, showCart, setShowCart } =
    useContext(dataContext);

  const filterProducts = (cat) => {
    if (cat === "All") {
      setFoodItems(food_items);
    } else {
      const updatedList = food_items.filter(
        (item) => item.food_category === cat
      );
      setFoodItems(updatedList);
    }
  };

  const items = useSelector((state) => state.cart);
  let subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = deliveryFee + taxes + subtotal;

  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] min-h-screen text-gray-100">
      <Nav />

      {/* Luxury Category Filters */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        {categories.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-4 w-28 h-28 hover:scale-105 transition-all duration-300 cursor-pointer border border-[#333333] hover:border-[#d4af37]/50 group shadow-lg"
            onClick={() => filterProducts(item.name)}
          >
            <div className="text-3xl mb-2 text-[#d4af37] group-hover:text-[#f9d423] transition-colors">
              {item.icon}
            </div>
            <div className="text-sm font-medium text-gray-300 group-hover:text-white">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      {/* Premium Food Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-8">
          <FaCrown className="text-[#d4af37] mr-3 text-xl" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f9d423] bg-clip-text text-transparent">
            Premium Selection
          </h2>
          <FaCrown className="text-[#d4af37] ml-3 text-xl" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Food_items.length > 0 ? (
            Food_items.map((item) => (
              <Card
                key={item.id}
                name={item.food_name}
                image={item.food_image}
                price={item.price}
                id={item.id}
                type={item.food_type}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-[#d4af37] text-4xl mb-4">
                <FaShoppingBasket className="inline-block" />
              </div>
              <h3 className="text-xl font-bold text-gray-300">
                No Items Found
              </h3>
              <p className="text-gray-500 mt-2">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Luxury Cart Sidebar */}
      <div
        className={`w-[400px] h-full fixed bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] top-0 right-0 shadow-2xl transition-all duration-500 z-50 border-l border-[#333333] ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center p-6 border-b border-[#333333]">
          <div className="flex items-center">
            <span className="text-[#d4af37] text-xl font-bold mr-2">
              Your Order
            </span>
            <div className="bg-[#d4af37] text-[#0d0d0d] text-xs font-bold px-2 py-1 rounded-full">
              {items.length} ITEMS
            </div>
          </div>
          <div
            className="text-2xl text-gray-400 hover:text-[#d4af37] cursor-pointer transition-colors"
            onClick={() => setShowCart(false)}
          >
            <RxCross2 />
          </div>
        </header>

        {/* Cart Body */}
        <div className="flex flex-col h-[calc(100%-80px)]">
          <div className="p-6 overflow-y-auto flex-grow">
            {items.length > 0 ? (
              items.map((item) => (
                <Card2
                  key={item.id}
                  name={item.food_name}
                  image={item.image}
                  price={item.price}
                  id={item.id}
                  qty={item.qty}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-[#d4af37] text-5xl mb-4">
                  <FaShoppingBasket />
                </div>
                <h3 className="text-xl font-bold text-gray-300 mb-2">
                  Your Cart is Empty
                </h3>
                <p className="text-gray-500">
                  Add some delicious items to get started
                </p>
              </div>
            )}
          </div>

          {/* Luxury Summary Section */}
          <div className="px-6 py-4 border-t border-[#333333] bg-[#0d0d0d]">
            <div className="flex justify-between text-sm mb-2 text-gray-400">
              <span>Subtotal</span>
              <span className="text-[#f9d423]">Rs. {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2 text-gray-400">
              <span>Delivery Fee</span>
              <span className="text-[#f9d423]">Rs. {deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-4 text-gray-400">
              <span>Tax (0.5%)</span>
              <span className="text-[#f9d423]">Rs. {taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-[#333333] pt-3 text-[#d4af37]">
              <span>TOTAL</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div>
            <button 
              className="w-full h-12 bg-gradient-to-r from-[#d4af37] to-[#f9d423] text-[#0d0d0d] font-bold rounded-lg flex justify-center items-center mt-4 hover:opacity-90 transition-opacity shadow-lg shadow-[#d4af37]/30"
              onClick={() => {
                toast.success(
                  <div>
                    <div className="font-bold">Order Placed Successfully!</div>
                    <div className="text-sm">Total: Rs. {total.toFixed(2)}</div>
                  </div>,
                  {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    className: "bg-[#0d0d0d] border border-[#d4af37]/30",
                  }
                )
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;