import React, { useState } from 'react';
import dessert1 from "../../assets/mainmenu/dessert1.png";
import dessert2 from "../../assets/mainmenu/dessert2.png";
import dessert3 from "../../assets/mainmenu/dessert3.png";
import Reviews from "../home/reviews";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

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

export default function Dessert() {
    const categories = [
        { id:1,title: "Ice Cream", price: 2.50, image: dessert1, emoji: "😋" },
        { id:2,title: "Chocolate Donuts", price: 4.50, image: dessert2, emoji: "😋" },
        { id:3,title: "Strawberry Cake", price: 3.90, image: dessert3, emoji: "😋" }
    ];
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { question: "What are your opening hours?", answer: "We’re open every day from 10:00 AM to 10:00 PM. Whether you’re craving lunch, dinner, or a late-night snack, we’re here to serve you!" },
        { question: "How can I contact support?", answer: "You can contact support via email or phone, as mentioned in our contact section." },
        { question: "Do you offer refunds?", answer: "Yes, we offer refunds under certain conditions. Please check our refund policy for more details." },
        { question: "Can I place an order online?", answer: "Absolutely! You can order directly through our website or mobile app for pickup or delivery. It’s fast, easy, and convenient!" },
    ];
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <div className="w-full px-4 md:px-8 py-8 bg-amber-200 flex flex-col items-center justify-center">
                <div className='text-center'>
                    <p className='text-lg'>Category:</p>
                    <div className="text-center">
                        <h2 className="text-5xl md:text-9xl font-black mb-2 leading-tight">
                            DESSERTS
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pt-10">
                        {categories.map((category, index) => (
                             <Link key={category.id} to={`/menu-detail/${category.id}`}> 
                            <CategoryCard
                                key={index}
                                title={category.title}
                                price={category.price}
                                image={category.image}
                                emoji={category.emoji}
                            />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full px-4 md:px-8 py-8 bg-amber-200 flex flex-col items-center justify-center relative">
                <Reviews />
            </div>
            <div className="text-center pt-10 pb-10">
                <h2 className="text-5xl md:text-9xl font-black mb-2 leading-tight">
                    COMMON
                </h2>
                <div
                    className="text-5xl md:text-9xl relative"
                    style={{
                        color: '#FF5733',
                        fontFamily: 'Comic Sans MS, cursive',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 0 #000',
                        WebkitTextStroke: '1px black',
                        letterSpacing: '0.02em',
                        display: 'inline-block'
                    }}
                >
                    Questions
                </div>

                {/* Responsive Grid Layout */}
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-5 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 bg-pink-500 border-black p-8 rounded-3xl">
                            <div className="space-y-4">
                                <div className="text-white text-2xl font-bold">{faq.question}</div>
                                <div className="flex justify-center">
                                    <button onClick={() => toggleFAQ(index)} className="text-white text-2xl">
                                        {openIndex === index ? <FaMinus /> : <FaPlus />}
                                    </button>
                                </div>
                                {openIndex === index && <div className="mt-4 text-white text-lg">{faq.answer}</div>}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}