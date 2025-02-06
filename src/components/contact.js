import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Contact() {
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
        <div className="w-full px-4 md:px-8 py-8 bg-amber-200 min-h-screen">
            {/* Title Section */}
            <div className="text-center max-w-4xl mx-auto relative z-10 mb-16">
                <h2 className="text-5xl md:text-9xl font-black mb-2 leading-tight">
                    GET IN
                    <span
                        className="inline-block -rotate-2 ml-2"
                        style={{
                            color: '#FF5733',
                            fontFamily: 'Comic Sans MS, cursive',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 0 #000',
                            WebkitTextStroke: '1px black',
                            letterSpacing: '0.02em',
                            lineHeight: '1.1',
                        }}
                    >
                        Touch
                    </span>
                </h2>
                <p className="text-black-500 text-lg pt-2">
                    Got questions or feedback? We’d love to hear from you! Reach out <br /> to us through the form below or use the provided contact details.
                </p>
                <div className="flex justify-center gap-6 md:gap-12 pt-5">
                    <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
                        <Facebook size={24} />
                    </Link>
                    <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-600 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
                        <Twitter size={24} />
                    </Link>
                    <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
                        <Instagram size={24} />
                    </Link>
                    <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
                        <Linkedin size={24} />
                    </Link>
                </div>
                <div className="border-4 bg-pink-500 border-black-500 p-8 mt-8 max-w-2xl mx-auto rounded-3xl">
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <label className="block text-lg font-semibold mb-2 text-left" htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-2 border-2 border-black-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-lg font-semibold mb-2 text-left" htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-2 border-2 border-black-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-lg font-semibold mb-2 text-left" htmlFor="subject">Subject</label>
                            <input type="text" id="subject" placeholder="Subject" className="w-full px-4 py-2 border-2 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-lg font-semibold mb-2 text-left" htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Your Message" className="w-full px-4 py-2 border-2 border-black-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
                        </div>
                        <button className="w-full bg-black-500 text-white-500 py-2 rounded-3xl">
                            Send Message
                        </button>
                    </div>
                </div>
                <div className="border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 bg-pink-500 border-black p-8 mt-8 max-w-2xl mx-auto rounded-3xl">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 justify-start">
                            <MdEmail className="h-6 w-6 text-white" />
                            <span className="text-white text-xl font-bold">Send us a email</span>
                        </div>
                        <div className="flex items-start mt-4">
                            <p className="text-white text-lg">nidhishah7467@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 bg-pink-500 border-black p-8 mt-8 max-w-2xl mx-auto rounded-3xl">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 justify-start">
                            <FaPhone className="h-6 w-6 text-white" />
                            <span className="text-white text-xl font-bold">Give us a call</span>
                        </div>
                        <div className="flex items-start mt-4">
                            <p className="text-white text-lg">+91 72838 37467</p>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 bg-pink-500 border-black p-8 mt-8 max-w-2xl mx-auto rounded-3xl">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 justify-start">
                            <FaMapMarkerAlt className="h-6 w-6 text-white" />
                            <span className="text-white text-xl font-bold">Our location</span>
                        </div>
                        <div className="flex items-start mt-4">
                            <p className="text-white text-lg">View on Maps</p>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-20">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
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

            </div>
        </div>
    );
}
