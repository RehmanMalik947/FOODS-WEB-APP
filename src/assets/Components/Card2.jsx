import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../../redux/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

const Card2 = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (qty > 1) dispatch(DecrementQty(id));
  };

  const handleIncrement = () => {
    dispatch(IncrementQty(id));
  };

  const handleRemove = () => {
    dispatch(RemoveItem(id));
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between mb-3 border border-[#333333] hover:border-[#d4af37]/30 group">
      {/* Left Part - Image and Info */}
      <div className="flex items-center gap-4">
        {/* Luxury Image Frame */}
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-[#333333] group-hover:border-[#d4af37]/50 transition-colors duration-300">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>

        <div className="flex flex-col justify-between">
          {/* Product Name with Gold Gradient */}
          <h3 className="text-base font-semibold bg-gradient-to-r from-[#d4af37] to-[#f9d423] bg-clip-text text-transparent">
            {name}
          </h3>

          {/* Luxury Quantity Controls */}
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={handleDecrement}
              className="w-7 h-7 bg-[#333333] rounded-full flex justify-center items-center hover:bg-[#d4af37]/20 transition-all duration-200 border border-[#333333] hover:border-[#d4af37]/50 text-[#d4af37]"
            >
              <FaMinus className="text-xs" />
            </button>
            <span className="w-8 text-center text-sm font-medium text-gray-300">{qty}</span>
            <button
              onClick={handleIncrement}
              className="w-7 h-7 bg-[#333333] rounded-full flex justify-center items-center hover:bg-[#d4af37]/20 transition-all duration-200 border border-[#333333] hover:border-[#d4af37]/50 text-[#d4af37]"
            >
              <FaPlus className="text-xs" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Part - Price and Remove */}
      <div className="flex flex-col items-end justify-between h-full">
        {/* Gold Price Display */}
        <span className="text-[#f9d423] text-lg font-bold">Rs. {price}</span>
        
        {/* Luxury Remove Button */}
        <button 
          onClick={handleRemove} 
          className="text-[#d4af37] hover:text-red-400 transition-colors duration-300 group/remove"
        >
          <div className="relative">
            <IoTrashBinOutline className="text-xl" />
            <div className="absolute inset-0 bg-red-500/10 rounded-full opacity-0 group-hover/remove:opacity-100 transition-opacity duration-300"></div>
          </div>
        </button>
      </div>

      {/* Subtle Gold Glow on Hover */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default Card2;