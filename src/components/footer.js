import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import footer_logo from "../assets/footerlogo.svg";
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className="bg-black-500 text-white-500 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    {/* Logo Section with Tagline */}
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                        <Link href='/'><img src={footer_logo} alt='footer logo' className="w-32 mb-4" /></Link>
                        <p className="text-lg text-white-500 opacity-75 font-medium">
                            Savor Every Delicious Bite
                        </p>
                    </div>

                    {/* Center Menu Sections */}
                    <div className="flex flex-col md:flex-row gap-16">
                        {/* Pages Section */}
                        <div>
                            <h3 className="text-xl text-white-500 font-semibold mb-6">PAGES:</h3>
                            <ul className="space-y-4">
                            <li>
                                    <Link  onClick={() => window.scrollTo(0, 0)} to="/" className="text-white-500 opacity-80 hover:opacity-100 hover:text-yellow-400 transition duration-300">
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <Link  onClick={() => window.scrollTo(0, 0)} to="/about" className="text-white-500 opacity-80 hover:opacity-100 hover:text-yellow-400 transition duration-300">
                                        ABOUT
                                    </Link>
                                </li>
                                <li>
                                    <Link  onClick={() => window.scrollTo(0, 0)} to="/contact" className="text-white-500 opacity-80 hover:opacity-100 hover:text-yellow-400 transition duration-300">
                                        CONTACT
                                    </Link>
                                </li>

                                <li>
                                    <Link  onClick={() => window.scrollTo(0, 0)} to="/blog" className="text-white-500 opacity-80 hover:opacity-100 hover:text-yellow-400 transition duration-300">
                                        BLOG
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Menu Section */}
                        <div>
                            <h3 className="text-xl text-white-500 font-semibold mb-6">MENU:</h3>
                            <ul className="space-y-4">
                            <li>
                                    <Link  onClick={() => window.scrollTo(0, 0)} to="/dessert" className="text-white-500 opacity-80 hover:opacity-100 hover:text-yellow-400 transition duration-300">
                                    DESSERTS
                                    </Link>
                                </li>
                                <li>
                                    <Link  onClick={() => window.scrollTo(0, 0)} to="/sides" className="text-white-500 opacity-80 hover:opacity-100 hover:text-yellow-400 transition duration-300">
                                    SIDES
                                   
                                    </Link>
                                </li>
                                <li>
                                    <Link  onClick={() => window.scrollTo(0, 0)} to="/burgers" className="text-white-500 opacity-80 hover:opacity-100 hover:text-yellow-400 transition duration-300">
                                    BURGERS
                                    </Link>
                                </li>
                                <li>
                                    <Link  onClick={() => window.scrollTo(0, 0)} to="/categories" className="text-white-500 opacity-80 hover:opacity-100 hover:text-yellow-400 transition duration-300">
                                        CATEGORIES
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-6 md:gap-12">
                        <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-white-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
                            <Facebook size={24} />
                        </Link>
                        <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-600 border-2 border-white-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
                            <Twitter size={24} />
                        </Link>
                        <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-white-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
                            <Instagram size={24} />
                        </Link>
                        <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-white-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
                            <Linkedin size={24} />
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-white-500 opacity-30" />

                {/* Copyright Text */}
                <div className="text-center text-sm text-white-500 opacity-75">
                    &copy; 2025 Bitejoy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
