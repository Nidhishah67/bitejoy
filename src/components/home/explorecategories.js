import React, { useState } from 'react';
import burgers from "../../assets/burgers.png";
import cupcake from "../../assets/cupcake.webp";
import frenchfries from "../../assets/frenchfries.webp";
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ image, title, emoji, path }) => { 
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left - 40,
            y: e.clientY - rect.top - 40
        });
    };

    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top
        navigate(path); // Navigate to the selected category
    };

    return (
        <div
            className="relative cursor-pointer rounded-2xl overflow-hidden bg-pink-400 w-full h-80 flex justify-center items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={handleClick} // Updated here
        >
            {/* Title with black background */}
            <div className="absolute top-4 left-4 bg-black-500 text-white-500 px-5 py-2 rounded-lg z-20 text-lg font-medium shadow-lg">
                {title}
            </div>

            {/* Emoji appears on hover */}
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

            {/* Category Image */}
            <img
                src={image}
                alt={`${title} category`}
                className="w-full h-full object-cover border-4 border-black border-r-8 border-b-8 rounded-3xl transition-all duration-300 hover:border-r-4 hover:border-b-4"
            />
        </div>
    );
};

const ExploreCategories = () => {
    const categories = [
        { title: "Dessert", image: cupcake, emoji: "😋" , path: "/dessert" },
        { title: "Sides", image: frenchfries, emoji: "😋" , path: "/sides"},
        { title: "Burgers", image: burgers, emoji: "😋" , path: "/burgers" }
    ];

    return (
        <div className="w-full px-4 md:px-8 py-8 bg-amber-200 flex flex-col items-center justify-center pt-16 md:pt-28">
            <div className="text-center">
                <h2 className="text-5xl md:text-7xl font-black mb-2 leading-tight">
                    EXPLORE OUR
                </h2>
                <div className="text-5xl md:text-9xl relative" style={{ color: '#FF5733', fontFamily: 'Comic Sans MS, cursive', fontWeight: 'bold', textShadow: '2px 2px 0 #000', WebkitTextStroke: '1px black', letterSpacing: '0.02em',  display: 'inline-block' }}>
                    Categories
                </div>
            </div>

            {/* Responsive Grid for Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pt-10">
                {categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        title={category.title}
                        image={category.image}
                        emoji={category.emoji}
                        path={category.path} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ExploreCategories;
