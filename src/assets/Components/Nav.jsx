import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { dataContext } from "../../ContextApi/UserContext";
import { food_items } from "../Pages/food";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Nav() {
  const { input, setInput, setFoodItems, setShowCart } = useContext(dataContext);

  useEffect(() => {
    const newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setFoodItems(newList);
  }, [input, setFoodItems]);

  const items = useSelector(state => state.cart);

  return (
    <nav className="h-20 flex justify-between items-center w-full px-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] shadow-xl border-b border-[#333333]">
      {/* Luxury Logo Section */}
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 bg-[#0d0d0d] flex justify-center items-center rounded-xl border border-[#333333] hover:border-[#d4af37]/50 cursor-pointer transition-all duration-300"
      >
        <MdFastfood className="text-[#d4af37]" size={32} />
      </motion.div>

      {/* Premium Search Bar */}
      <motion.form
        whileHover={{ scale: 1.02 }}
        className="flex items-center bg-[#0d0d0d] w-[500px] h-12 px-6 rounded-full border border-[#333333] hover:border-[#d4af37]/50 transition-all duration-300"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="mr-4 text-[#d4af37]" />
        <input
          type="text"
          placeholder="Search for premium dishes..."
          className="w-full outline-none border-none text-gray-300 placeholder-gray-500 bg-transparent"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </motion.form>

      {/* Luxury Cart Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative w-16 h-16 bg-[#0d0d0d] flex justify-center items-center rounded-xl border border-[#333333] hover:border-[#d4af37]/50 cursor-pointer transition-all duration-300"
        onClick={() => setShowCart(true)}
      >
        <span className="absolute -top-2 -right-2 text-xs text-white bg-gradient-to-br from-[#d4af37] to-[#f9d423] rounded-full w-6 h-6 flex items-center justify-center font-bold">
          {items.length}
        </span>
        <RiShoppingBagFill className="text-[#d4af37]" size={28} />
      </motion.div>
    </nav>
  );
}

export default Nav;