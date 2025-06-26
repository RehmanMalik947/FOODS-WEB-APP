import React from 'react';
import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { FaUtensils } from 'react-icons/fa';
import { GiHamburger, GiFullPizza, GiMeal } from "react-icons/gi";
import { FaGlassWater } from "react-icons/fa6";

const Category = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline className='w-[40px] h-[40px] text-[#d4af37]' />,
        color: "from-[#1a1a1a] to-[#0d0d0d]"
    },
    {
        id: 2,
        name: "Breakfast",
        icon: <MdFreeBreakfast className='w-[40px] h-[40px] text-[#d4af37]' />,
        color: "from-[#1a1a1a] to-[#0d0d0d]"
    },
    {
        id: 3,
        name: "Soup",
        icon: <TbSoupFilled className='w-[40px] h-[40px] text-[#d4af37]' />,
        color: "from-[#1a1a1a] to-[#0d0d0d]"
    },
    {
        id: 4,
        name: "Pasta",
        icon: <FaUtensils className='w-[40px] h-[40px] text-[#d4af37]' />,
        color: "from-[#1a1a1a] to-[#0d0d0d]"
    },
    {
        id: 5,
        name: "Main Course",
        icon: <GiMeal className='w-[40px] h-[40px] text-[#d4af37]' />,
        color: "from-[#1a1a1a] to-[#0d0d0d]"
    },
    {
        id: 6,
        name: "Pizza",
        icon: <GiFullPizza className='w-[40px] h-[40px] text-[#d4af37]' />,
        color: "from-[#1a1a1a] to-[#0d0d0d]"
    },
    {
        id: 7,
        name: "Burger",
        icon: <GiHamburger className='w-[40px] h-[40px] text-[#d4af37]' />,
        color: "from-[#1a1a1a] to-[#0d0d0d]"
    },
    {
        id: 8,
        name: "Beverages",
        icon: <FaGlassWater className='w-[40px] h-[40px] text-[#d4af37]' />,
        color: "from-[#1a1a1a] to-[#0d0d0d]"
    }
];

export default Category;