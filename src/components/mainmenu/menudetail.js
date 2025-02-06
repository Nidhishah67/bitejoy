import React, { useState } from "react";
import dessert1 from "../../assets/mainmenu/dessert1.png";
import dessert2 from "../../assets/mainmenu/dessert2.png";
import dessert3 from "../../assets/mainmenu/dessert3.png";
import side1 from "../../assets/mainmenu/side1.png";
import side2 from "../../assets/mainmenu/side2.png";
import side3 from "../../assets/mainmenu/frenchfries.webp";
import burger1 from "../../assets/mainmenu/burger1.png";
import burger2 from "../../assets/mainmenu/burger2.png";
import burger3 from "../../assets/mainmenu/burger3.png";
import burger4 from "../../assets/mainmenu/burger4.png";
import burger5 from "../../assets/mainmenu/burger5.png";
import burger6 from "../../assets/mainmenu/burger6.webp";

import { useParams } from 'react-router-dom';
import Reviews from "../home/reviews";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import CartModal from "./cartmodal";


export default function Menudetail() {
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
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleAddToCart = () => {
        // Check if item already exists in cart
        const existingItemIndex = cartItems.findIndex(item => item.id === category.id);
        
        if (existingItemIndex > -1) {
            // If item exists, update its quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += quantity;
            setCartItems(updatedCartItems);
        } else {
            // If item doesn't exist, add new item to cart
            setCartItems([
                ...cartItems, 
                {
                    ...category,
                    quantity: quantity
                }
            ]);
        }
        
        // Open cart modal
        setIsCartOpen(true);
    };

    const updateCartItemQuantity = (itemId, newQuantity) => {
        const updatedCartItems = cartItems.map(item => 
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        ).filter(item => item.quantity > 0);
        
        setCartItems(updatedCartItems);
    };

    const removeCartItem = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    const dessertDetail = [
        {
            id: 1,
            title: "Ice Cream",
            price: 2.50,
            image: dessert1,
            description: "A delicious creamy dessert. Perfect for a hot day. Available in multiple flavors."
        },
        {
            id: 2,
            title: "Chocolate Donuts",
            price: 4.50,
            image: dessert2,
            description: "Soft, fluffy, and rich in chocolate flavor. A perfect snack for any time. Freshly baked every day."
        },
        {
            id: 3,
            title: "Strawberry Cake",
            price: 3.90,
            image: dessert3,
            description: "A moist and fluffy cake with fresh strawberries. A sweet and fruity delight. Perfect for celebrations."
        },
        { id: 4, title: "Fries Cone", price: 6.50, image: side1, description: "Crispy fries served in a cone." },
        { id: 5, title: "Onion Rings", price: 5.00, image: side2, description: "Crispy, golden onion rings perfect as a side." },
        { id: 6, title: "French Fries", price: 7.50, image: side3, description: "Classic French fries with a golden crunch." },
        { id: 7, title: "Lamb Burger", price: 9.90, image: burger1, description: "Juicy lamb patty with fresh toppings." },
        { id: 8, title: "Beef Burger", price: 8.90, image: burger2, description: "A delicious beef patty with all the fixings." },
        { id: 9, title: "Bacon Burger", price: 7.90, image: burger3, description: "Beef patty with crispy bacon and cheese." },
        { id: 10, title: "Vegan Burger", price: 9.50, image: burger4, description: "Plant-based patty with fresh veggies and sauce." },
        { id: 11, title: "Classic Burger", price: 8.50, image: burger5, description: "A classic beef burger with lettuce, tomato, and cheese." },
        { id: 12, title: "Plain Burger", price: 9.90, image: burger6, description: "Simple beef burger with just the patty and bun." }

    ];

    const [openSection, setOpenSection] = useState(null);
    const [quantity, setQuantity] = useState(1); // Set default quantity to 1


    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const { id } = useParams();
    const category = dessertDetail.find((b) => b.id === parseInt(id));

    if (!category) {
        return <div>Menu not found</div>;
    }

    const getRandomItems = (array, numItems) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random()); // Shuffle the array
        return shuffled.slice(0, numItems); // Return the first 'numItems' from the shuffled array
    };
     
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 p-6 pt-16 md:pt-28">
                <div className="flex justify-center">
                    <img
                        src={category.image}
                        alt="Love Daily"
                        className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] object-cover rounded-3xl shadow-lg border-4 border-gray-300"
                    />
                </div>
                <div className="flex flex-col justify-start">
                    <h1 className="text-5xl md:text-7xl font-black mb-2 leading-tight">{category.title}</h1>
                    <h1 className="text-5xl md:text-3xl mb-2 leading-tight">₹{category.price}</h1>
                    <p className="text-lg text-gray-700 mt-4">
                        {category.description}
                    </p>

                    <div className="flex flex-col mt-5">
                        <input
                            type="number"
                            id="quantity"
                            value={quantity} // Bind the input value to the quantity state
                            min="1" // Prevent quantity from going below 1
                            onChange={(e) => setQuantity(Math.max(1, e.target.value))} // Ensure minimum value is 1
                            placeholder="Quantity"
                            className="w-96 px-4 py-2 border-2 border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    <button 
                onClick={handleAddToCart} 
                className="mt-4 w-96 h-10 text-lg bg-black-500 text-white-500 font-bold rounded-full flex items-center justify-center gap-2"
            >
                ADD TO CART
            </button>

            {/* Cart Modal */}
            <CartModal 
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                onUpdateQuantity={updateCartItemQuantity}
                onRemoveItem={removeCartItem}
            />

                    {/* Centered Free Delivery Button */}
                    <button className="mt-5 w-96 h-10 text-lg bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center">
                        Free Delivery
                    </button>

                    {/* Divider */}
                    <div className="border-t-2 border-gray-300 mt-4 mb-4"></div>

                    {/* Collapsible Section - Details */}
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-lg text-gray-700">
                            Details
                        </p>
                        <button
                            onClick={() => toggleSection('details')}
                            className="text-xl text-gray-700 font-bold"
                        >
                            {openSection === 'details' ? '-' : '+'}
                        </button>
                    </div>

                    {/* Collapsible Content */}
                    {openSection === 'details' && (
                        <p className="text-lg text-gray-700 mt-2">
                            We pride ourselves on providing high-quality products made from the finest ingredients. Each item in our menu is carefully crafted to meet the highest standards of taste and freshness. Our offerings are designed to suit a variety of preferences, ensuring there's something for everyone. We focus on delivering exceptional flavors and experiences, whether it's a meal, dessert, or drink.
                        </p>
                    )}
                    <div className="border-t-2 border-gray-300 mt-4 mb-4"></div>

                    {/* Collapsible Section - Delivery */}
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-lg text-gray-700">
                            Delivery
                        </p>
                        <button
                            onClick={() => toggleSection('delivery')}
                            className="text-xl text-gray-700 font-bold"
                        >
                            {openSection === 'delivery' ? '-' : '+'}
                        </button>
                    </div>

                    {/* Collapsible Content */}
                    {openSection === 'delivery' && (
                        <p className="text-lg text-gray-700 mt-2">
                            We offer convenient and reliable delivery options to ensure your order reaches you in perfect condition and on time. Our delivery services are designed to be fast and efficient, so you can enjoy your order without delay. Depending on your location, we provide multiple delivery options, including standard and express delivery, all at no additional cost for eligible orders. We aim to bring the best of our menu directly to your doorstep with ease.
                        </p>
                    )}
                    <div className="border-t-2 border-gray-300 mt-4 mb-4"></div>

                    {/* Collapsible Section - Refunds */}
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-lg text-gray-700">
                            Refunds
                        </p>
                        <button
                            onClick={() => toggleSection('refunds')}
                            className="text-xl text-gray-700 font-bold"
                        >
                            {openSection === 'refunds' ? '-' : '+'}
                        </button>
                    </div>

                    {/* Collapsible Content */}
                    {openSection === 'refunds' && (
                        <p className="text-lg text-gray-700 mt-2">
                            Customer satisfaction is our top priority. If you're not completely satisfied with your purchase, we offer a simple and transparent refund process. Should there be any issues with your order, such as incorrect items or delivery problems, just contact our support team, and we’ll resolve it promptly. We want to make sure every experience with us is a positive one, and we are committed to ensuring you’re happy with your purchase.
                        </p>
                    )}
                </div>
            </div>
            <div className="w-full px-4 md:px-8 py-8 bg-amber-200 flex flex-col items-center justify-center relative">
                <Reviews />
            </div>
            <div className="w-full px-4 md:px-8 py-8 bg-amber-200 flex flex-col items-center justify-center pt-16 md:pt-28">
                <div className="text-center">
                    <h2 className="text-5xl md:text-8xl font-black mb-2 leading-tight">
                        YOU MIGHT ALSO
                    </h2>
                    <div className="text-5xl md:text-8xl relative" style={{ color: '#FF5733', fontFamily: 'Comic Sans MS, cursive', fontWeight: 'bold', textShadow: '2px 2px 0 #000', WebkitTextStroke: '1px black', letterSpacing: '0.02em', display: 'inline-block' }}>
                        Like
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-10 pt-10">
                {getRandomItems(dessertDetail, 3).map((category, index) => (
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
    );
}
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
