import React from "react";
import { FaLeaf, FaPlus, FaCrown } from "react-icons/fa";
import { GiChicken, GiGoldBar } from "react-icons/gi";
import { AddItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(AddItem({ id, name, price, image, qty: 1 }));
  };

  return (
    <NavLink
      to={`/item/${id}`}
      className="group relative w-[200px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] text-white rounded-xl p-3 flex flex-col items-center border border-[#333333] hover:border-[#d4af37]/50 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d4af37]/10"
    >
      {/* **Luxury Gold Crown Badge (Top-Right)** */}
      <div className="absolute -top-2 -right-2 z-20 rotate-12">
        <div className="flex items-center justify-center bg-gradient-to-br from-[#d4af37] to-[#f9d423] text-[#0d0d0d] text-[10px] font-bold px-2 py-1 rounded-full shadow-lg shadow-[#d4af37]/30">
          <FaCrown className="text-[#0d0d0d]" />
        </div>
      </div>

      {/* **Metallic Gold Frame for Image** */}
      <div className="relative w-full h-[120px] mb-3 rounded-lg overflow-hidden border-2 border-[#333333] group-hover:border-[#d4af37]/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* **Luxury Product Name (Gold Gradient Text)** */}
      <h3 className="text-sm font-bold text-center mb-2 bg-gradient-to-r from-[#d4af37] to-[#f9d423] bg-clip-text text-transparent tracking-tight">
        {name}
      </h3>

      {/* **Price & Veg/Non-Veg Indicator (Elegant Layout)** */}
      <div className="w-full flex justify-between items-center mb-3">
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-[#d4af37]">Rs.</span>
          <span className="text-lg font-bold text-[#f9d423]">{price}</span>
        </div>
        
        <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#d4af37]/30 group-hover:bg-[#d4af37]/10 transition-all duration-200">
          {type === "veg" ? (
            <FaLeaf className="text-emerald-400 text-xs" />
          ) : (
            <GiChicken className="text-[#d4af37] text-xs" />
          )}
        </div>
      </div>

      {/* **Ultra-Luxury Add Button (Gold Shimmer Effect)** */}
      <button
        onClick={handleAdd}
        className="w-full relative overflow-hidden group/button"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f9d423] rounded-lg transition-all duration-300 shadow-md shadow-[#d4af37]/30"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/button:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9d423]/40 via-[#d4af37]/20 to-transparent animate-shine"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center gap-1 text-xs font-bold text-[#0d0d0d] py-2 px-3 rounded-lg">
          <FaPlus className="transition-all duration-200 group-hover/button:rotate-90" />
          <span>ADD TO CART</span>
        </div>
      </button>

      {/* **Subtle Gold Glow on Hover** */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </NavLink>
  );
}

export default Card;