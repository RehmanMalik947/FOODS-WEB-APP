import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { food_items } from "../Pages/food";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AddItem } from "../../redux/cartSlice";
import { FaTimes, FaLeaf, FaShoppingCart, FaStar } from "react-icons/fa";
import { GiChicken } from "react-icons/gi";
import { motion } from "framer-motion";

const Item = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const singleProduct = food_items.filter((item) => Number(id) === item.id);
    setProduct(singleProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product.length > 0) {
      const item = product[0];
      dispatch(AddItem(item));
      toast.success(
        <div className="flex items-center gap-2">
          <FaShoppingCart className="text-[#d4af37]" />
          <span>Added {item.food_name} to cart</span>
        </div>,
        {
          className: "border-l-4 border-[#d4af37] bg-[#1a1a1a] text-white",
          position: "top-right",
          autoClose: 3000
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      {product.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl"
        >
          {/* Luxury Card Container */}
          <div className="bg-[#121212] rounded-xl overflow-hidden shadow-2xl border border-[#252525] flex flex-col lg:flex-row">
            
            {/* Premium Image Section */}
            <div className="lg:w-1/2 relative overflow-hidden group h-96 lg:h-auto">
              <motion.img
                src={item.food_image}
                alt={item.food_name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Luxury Badges */}
              <div className="absolute top-5 left-5 flex gap-2">
                <span className="bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.food_category}
                </span>
                <div className="bg-black/70 p-2 rounded-full border border-[#333]">
                  {item.food_type === "veg" ? (
                    <FaLeaf className="text-emerald-400 text-xs" />
                  ) : (
                    <GiChicken className="text-[#d4af37] text-xs" />
                  )}
                </div>
              </div>
            </div>

            {/* Luxury Details Section */}
            <div className="lg:w-1/2 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-3xl font-bold text-white">
                  {item.food_name}
                </h1>
                <NavLink to="/">
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    className="text-gray-400 hover:text-[#d4af37] text-xl"
                  >
                    <FaTimes />
                  </motion.button>
                </NavLink>
              </div>

              {/* Premium Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#d4af37] text-sm" />
                ))}
                <span className="text-sm text-gray-400 ml-2">(48 reviews)</span>
              </div>

              {/* Luxury Description */}
              <p className="text-gray-400 mb-8 leading-relaxed">
                Expertly prepared with premium {item.food_type === "veg" ? "organic" : "free-range"} ingredients, 
                this {item.food_category.toLowerCase()} dish features an exquisite balance of flavors.
              </p>

              {/* Price & Add to Cart */}
              <div className="mt-auto">
                <div className="mb-6">
                  <span className="text-sm text-gray-500">Price</span>
                  <p className="text-3xl font-bold text-[#d4af37]">Rs. {item.price}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-[#d4af37] to-[#f9d423] text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Item;