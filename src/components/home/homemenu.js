import React, { useState } from 'react';
import dessert1 from "../../assets/mainmenu/dessert1.png";
import dessert2 from "../../assets/mainmenu/dessert2.png";
import dessert3 from "../../assets/mainmenu/dessert3.png";
import burger1 from "../../assets/mainmenu/burger1.png";
import burger2 from "../../assets/mainmenu/burger2.png";
import burger3 from "../../assets/mainmenu/burger3.png";
import burger4 from "../../assets/mainmenu/burger4.png";
import burger5 from "../../assets/mainmenu/burger5.png";
import burger6 from "../../assets/mainmenu/burger6.webp";
import side1 from "../../assets/mainmenu/side1.png";
import side2 from "../../assets/mainmenu/side2.png";
import side3 from "../../assets/mainmenu/frenchfries.webp";

const CategoryCard = ({ image, title, emoji, price }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left - 40,
            y: e.clientY - rect.top - 40
        });
    };

    return (
        <div className="flex flex-col items-center">
            <div
                className="relative rounded-2xl overflow-hidden w-full h-80 flex justify-center items-center cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
            >
                <div className="absolute top-4 left-4 bg-black-500 text-white-500 px-5 py-2 rounded-lg z-20 text-lg font-medium shadow-lg">
                    ₹{price}
                </div>

                {isHovered && (
                    <div
                        className="absolute z-20 text-5xl transition-all duration-200"
                        style={{
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y}px`,
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none'
                        }}
                    >
                        {emoji}
                    </div>
                )}

                <img
                    src={image}
                    alt={`${title} category`}
                    className="w-full h-full object-cover border-4 border-black border-r-8 border-b-8 rounded-3xl transition-all duration-300 hover:border-r-4 hover:border-b-4"
                />
            </div>
            <div className="mt-4 text-xl font-medium">
                {title}
            </div>
        </div>
    );
};

export default function Homemenu() {
    const [selectedCategory, setSelectedCategory] = useState('desserts');

    const categories = {
        desserts: [
            { title: "Ice Cream", price: 2.50, image: dessert1, emoji: "😋" },
            { title: "Chocolate Donuts", price: 4.50, image: dessert2, emoji: "😋" },
            { title: "Strawberry Cake", price: 3.90, image: dessert3, emoji: "😋" }
        ],
        burgers: [
            { title: "Lamb Burger", price: 9.90, image: burger1, emoji: "😋" },
            { title: "BeefBurger", price: 8.90, image: burger2, emoji: "😋" },
            { title: "Bacon Burger", price: 7.90, image: burger3, emoji: "😋" },
            { title: "Vegan Burger", price: 9.50, image: burger4, emoji: "😋" },
            { title: "Classic Burger", price: 8.50, image: burger5, emoji: "😋" },
            { title: "Plain Burger", price: 9.90, image: burger6, emoji: "😋" }
        ],
        sides: [
            { title: "Fries Cone", price: 6.50, image: side1, emoji: "😋" },
            { title: "Onion Rings", price: 5.00, image: side2, emoji: "😋" },
            { title: "French Fries", price: 7.50, image: side3, emoji: "😋" }
        ]
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="relative">
            <div className="w-full px-4 md:px-8 py-8 bg-pink-500 flex flex-col items-center justify-center">
                <div className="text-center">
                    <h2 className="text-5xl md:text-9xl font-black mb-2 leading-tight">
                        OUR TASTY
                        <div className="text-5xl md:text-9xl relative" style={{ color: '#FF5733', fontFamily: 'Comic Sans MS, cursive', fontWeight: 'bold', textShadow: '2px 2px 0 #000', WebkitTextStroke: '1px black', letterSpacing: '0.02em', display: 'inline-block' }}>
                            Menu
                        </div>
                    </h2>
                </div>

                <div className="flex flex-row gap-4 mt-4">
                    <button
                        onClick={() => handleCategoryChange('burgers')}
                        className={`w-44 h-16 text-lg text-black-500 font-bold border-4 border-black rounded-full border-b-8 border-r-4 flex items-center justify-center gap-2 hover:border-b-2 hover:border-r-2 ${selectedCategory === 'burgers' ? 'bg-yellow-500 text-white' : 'bg-transparent'}`}
                    >
                        BURGERS
                    </button>
                    <button
                        onClick={() => handleCategoryChange('sides')}
                        className={`w-44 h-16 text-lg text-black-500 font-bold border-4 border-black rounded-full border-b-8 border-r-4 flex items-center justify-center gap-2 hover:border-b-2 hover:border-r-2 ${selectedCategory === 'sides' ? 'bg-yellow-500 text-white' : 'bg-transparent'}`}
                    >
                        SIDES
                    </button>
                    <button
                        onClick={() => handleCategoryChange('desserts')}
                        className={`w-44 h-16 text-lg text-black-500 font-bold border-4 border-black rounded-full border-b-8 border-r-4 flex items-center justify-center gap-2 hover:border-b-2 hover:border-r-2 ${selectedCategory === 'desserts' ? 'bg-yellow-500 text-white' : 'bg-transparent'}`}
                    >
                        DESSERTS
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pt-10 pb-24">
                    {categories[selectedCategory].map((category, index) => (
                        <CategoryCard
                            key={index}
                            title={category.title}
                            price={category.price}
                            image={category.image}
                            emoji={category.emoji}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}