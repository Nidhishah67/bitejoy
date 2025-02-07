import React  from 'react';
import lovedaily from "../../assets/lovedaily.webp";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import about from "../../assets/about2.webp";
import team1 from "../../assets/team/team1.webp";
import team2 from "../../assets/team/team2.webp";
import team3 from "../../assets/team/team3.webp";
import team4 from "../../assets/team/team4.webp";
import team5 from "../../assets/team/team5.webp";
import team6 from "../../assets/team/team6.webp";
import image1 from "../../assets/hero/heroimage1.webp";
import image2 from "../../assets/hero/heroimage2.webp";
import image3 from "../../assets/hero/heroimage3.webp";
import image4 from "../../assets/hero/heroimage4.webp";
import image5 from "../../assets/hero/heroimage5.webp";
import image6 from "../../assets/hero/heroimage6.webp";
import image7 from "../../assets/hero/heroimage7.webp";
import image8 from "../../assets/hero/heroimage8.webp";
import image9 from "../../assets/hero/heroimage9.webp";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './about.css'

export default function About() {
    const navigate = useNavigate();
   

    const images = [
        { id: 1, src: image1, alt: 'Burger' },
        { id: 2, src: image2, alt: 'Milkshake' },
        { id: 3, src: image3, alt: 'Burger hands' },
        { id: 4, src: image4, alt: 'Fries box' },
        { id: 5, src: image5, alt: 'Fries standing' },
        { id: 6, src: image6, alt: 'Fries standing' },
        { id: 7, src: image7, alt: 'Fries standing' },
        { id: 8, src: image8, alt: 'Fries standing' },
        { id: 9, src: image9, alt: 'Fries standing' }
    ];

  
    return (
        <>
           <div className="grid grid-cols-12 items-start gap-6 p-6 pt-16 md:pt-16">
    <div className="col-span-12 md:col-span-4 flex flex-col justify-start pt-10">
        <h1 className="text-5xl md:text-7xl font-black mb-2 leading-tight">WHO WE</h1>
        <h1 className="text-5xl md:text-7xl font-black mb-2 leading-tight">
            <span className="text-5xl md:text-8xl relative"
                style={{
                    color: '#FF5733', fontFamily: 'Comic Sans MS, cursive', fontWeight: 'bold',
                    textShadow: '2px 2px 0 #000', WebkitTextStroke: '1px black',
                    letterSpacing: '0.02em', lineHeight: '1.1', transform: 'rotate(-2deg)',
                    display: 'inline-block'
                }}>
                Are
            </span>
        </h1>
        <p className="text-black-500 text-lg pt-2">
            We’re passionate about creating <br /> delicious, high-quality fast food <br /> that brings people together. <br /> We believe that fast food should <br /> be more than just quick and convenient.
        </p>
        <button onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }} className="mt-4 w-44 h-16 text-lg bg-pink-500 text-black font-bold border-2 border-black rounded-full border-b-4 border-r-4 flex items-center justify-center gap-2 hover:border-b-2 hover:border-r-2">
            CONTACT US
            <div className="bg-white-500 rounded-full p-1 flex items-center justify-center border-4 border-black-500">
               <ArrowUpRight className="w-4 h-4" />
            </div>
        </button>
    </div>

    <div className="col-span-12 md:col-span-8 flex justify-center">
        <div className="about-carousel-container w-full about-perspective-1000">
            <div className="about-carousel-content relative w-full h-full animate-rotate">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className="about-carousel-item border-4 border-black-500"
                        style={{
                            backgroundImage: `url(${image.src})`,
                            transform: `rotateY(${(360 / images.length) * index}deg) translateZ(${window.innerWidth < 768 ? 300 : 400}px)`,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    </div>

    <div className="col-span-full text-center w-full">
        <h1
            className="text-5xl md:text-7xl font-black mb-2 leading-tight inline-block"
        >
            WHERE TASTE COMES
            <span
                className="text-5xl md:text-8xl relative ml-2"
                style={{
                    color: '#FF5733',
                    fontFamily: 'Comic Sans MS, cursive',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 0 #000',
                    WebkitTextStroke: '1px black',
                    letterSpacing: '0.02em',
                    lineHeight: '1.1',
                    transform: 'rotate(-2deg)',
                    display: 'inline'
                }}
            >
                Alive
            </span>
        </h1>
    </div>
</div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 p-6 pt-16  md:pt-28">
                <div className="flex justify-center">
                    <img
                        src={lovedaily}
                        alt="Love Daily"
                        className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] object-cover rounded-3xl shadow-lg border-4 border-gray-300"
                    />
                </div>
                <div className="flex flex-col justify-start pt-10">
                    <p className="text-xl md:text-lg  mb-2 ">Our Story</p>
                    <h1 className="text-5xl md:text-7xl font-black mb-2 leading-tight">WHERE IT ALL</h1>
                    <h1 className="text-5xl md:text-8xl font-black mb-2 leading-tight">
                        <span className="text-5xl md:text-8xl relative"
                            style={{
                                color: '#FF5733', fontFamily: 'Comic Sans MS, cursive', fontWeight: 'bold',
                                textShadow: '2px 2px 0 #000', WebkitTextStroke: '1px black',
                                letterSpacing: '0.02em', lineHeight: '1.1', transform: 'rotate(-2deg)',
                                display: 'inline-block'
                            }}>
                            Began
                        </span>
                    </h1>
                    <p className="text-black-500 text-lg pt-2">
                        We started with the love of good food and the vision of redefining the concept of fast food. What began as a small idea has grown into a place where taste, quality and community come together.
                    </p>
                    <p className="text-black-500 text-lg pt-2">
                        From our first burger to every meal we serve today, our story is about passion, innovation, and a commitment to making every bite memorable.
                    </p>
                    <button onClick={() => { navigate('/menu'); window.scrollTo(0, 0); }} className="mt-4 w-44 h-16 text-lg bg-pink-500 text-black font-bold border-2 border-black rounded-full border-b-4 border-r-4 flex items-center justify-center gap-2 hover:border-b-2 hover:border-r-2">
                        OUR MENU
                        <div className="bg-white-500 rounded-full p-1 flex items-center justify-center border-4 border-black-500">
                           <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 p-6 pt-16  md:pt-28">
                <div className="flex flex-col justify-start pt-10">
                    <p className="text-xl md:text-lg  mb-2 ">Our Mission</p>
                    <h1 className="text-5xl md:text-7xl font-black mb-2 leading-tight">FLAVOR WITH</h1>
                    <h1 className="text-5xl md:text-8xl font-black mb-2 leading-tight">
                        <span className="text-5xl md:text-8xl relative"
                            style={{
                                color: '#FF5733', fontFamily: 'Comic Sans MS, cursive', fontWeight: 'bold',
                                textShadow: '2px 2px 0 #000', WebkitTextStroke: '1px black',
                                letterSpacing: '0.02em', lineHeight: '1.1', transform: 'rotate(-2deg)',
                                display: 'inline-block'
                            }}>
                            Purpose
                        </span>
                    </h1>
                    <p className="text-black-500 text-lg pt-2">
                        Our mission is simple: to deliver fast, fresh, and flavorful meals that bring joy to every bite. We’re dedicated to creating a dining experience that combines quality ingredients, exceptional taste, and unbeatable convenience.
                    </p>
                    <p className="text-black-500 text-lg pt-2">
                        Whether it’s a quick snack or a full meal, we strive to make every moment with us unforgettable.
                    </p>
                    <button onClick={() => { navigate('/menu'); window.scrollTo(0, 0); }} className="mt-4 w-44 h-16 text-lg bg-pink-500 text-black font-bold border-2 border-black rounded-full border-b-4 border-r-4 flex items-center justify-center gap-2 hover:border-b-2 hover:border-r-2">
                        OUR MENU
                        <div className="bg-white-500 rounded-full p-1 flex items-center justify-center border-4 border-black-500">
                           <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>
                <div className="flex justify-center">
                    <img
                        src={about}
                        alt="Love Daily"
                        className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] object-cover rounded-3xl shadow-lg border-4 border-gray-300"
                    />
                </div>
            </div>
            <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="text-center pt-10">
                <p className="text-lg">Our Process:</p>
                <div className="w-full px-4 md:px-8 py-12 bg-amber-200 flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-6xl md:text-8xl font-black mb-4 leading-tight tracking-tight">
                            FRESH, FAST,
                        </h2>
                        <div
                            className="text-6xl md:text-9xl font-bold"
                            style={{
                                fontFamily: 'Comic Sans MS, cursive',
                                color: '#FF4500',
                                WebkitTextStroke: '2px black',
                                textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
                                transform: 'rotate(-2deg)',
                                display: 'inline-block',
                                padding: '0.5rem'
                            }}
                        >
                            Flawless
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Step Section with 6-6 Split */}
            <div className="w-full px-4 md:px-16 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side (6) - Step Number and Line */}
                    <div className="flex items-start justify-end gap-8">
                        {/* Step Number */}
                        <div className="flex flex-col items-center pt-3">
                            <div className="relative">
                                <div className="text-5xl font-bold">STEP 1:</div>
                            </div>
                        </div>
                        
                        <div className="hidden md:block border-l-4 border-black-300 h-full"></div>
                    </div>

                    {/* Right Side (6) - Content */}
                    <div className="flex flex-col">
                        <h3 className="text-3xl  mb-4">Sourcing Quality Ingredients</h3>
                        <p className="text-lg leading-relaxed text-gray-700 mb-6">
                            We start by carefully selecting the freshest and highest-quality ingredients.
                            From premium cuts of meat to farm-fresh produce, every component of our menu
                            is chosen to ensure maximum flavor and nutritional value.
                        </p>
                        {/* Image */}
                        <div className="w-full max-w-md h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={team1}
                                alt="Quality Ingredients"
                                className="w-full h-full object-cover border-4 border-black-500 border-b-8 border-r-8"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side (6) - Step Number and Line */}
                    <div className="flex items-start justify-end gap-8">
                        {/* Step Number */}
                        <div className="flex flex-col items-center pt-10">
                            <div className="relative">
                                <div className="text-5xl font-bold">STEP 2:</div>
                            </div>
                        </div>

                        {/* Vertical Line */}
                        <div className="hidden md:block border-l-4 border-black-300 h-full"></div>
                    </div>

                    {/* Right Side (6) - Content */}
                    <div className="flex flex-col">
                        <h3 className="text-3xl mb-4 pt-10">Crafting with Care</h3>
                        <p className="text-lg leading-relaxed text-gray-700 mb-6">
                            Our team of expert chefs prepares each meal with precision and passion. Whether it’s grilling the perfect burger or frying golden, crispy fries, we follow tried-and-true methods to bring out the best in every dish.
                        </p>
                        {/* Image */}
                        <div className="w-full max-w-md h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={team2}
                                alt="Quality Ingredients"
                                className="w-full h-full object-cover border-4 border-black-500 border-b-8 border-r-8"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side (6) - Step Number and Line */}
                    <div className="flex items-start justify-end gap-8">
                        {/* Step Number */}
                        <div className="flex flex-col items-center pt-10">
                            <div className="relative">
                                <div className="text-5xl font-bold">STEP 3:</div>
                            </div>
                        </div>

                        {/* Vertical Line */}
                        <div className="hidden md:block border-l-4 border-black-300 h-full"></div>
                    </div>

                    {/* Right Side (6) - Content */}
                    <div className="flex flex-col">
                        <h3 className="text-3xl  mb-4 pt-10">Serving with Speed</h3>
                        <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Once your meal is ready, we deliver it fresh and fast to your table or doorstep. With our streamlined process, we ensure you enjoy your food at its peak — hot, fresh, and ready to satisfy your cravings.
                        </p>
                        {/* Image */}
                        <div className="w-full max-w-md h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={team3}
                                alt="Quality Ingredients"
                                className="w-full h-full object-cover border-4 border-black-500 border-b-8 border-r-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="w-full px-4 md:px-8 py-8 bg-amber-200 flex flex-col items-center justify-center">
                <div className="text-center">
                    <h2 className="text-5xl md:text-8xl font-black mb-2 leading-tight">
                        THE PEOPLE BEHIND
                    </h2>
                    <div className="text-5xl md:text-8xl font-black mb-2 leading-tight">
                        THE{" "}
                        <span
                            className="text-5xl md:text-8xl relative"
                            style={{
                                color: "#FF5733",
                                fontFamily: "Comic Sans MS, cursive",
                                fontWeight: "bold",
                                textShadow: "2px 2px 0 #000",
                                WebkitTextStroke: "1px black",
                                letterSpacing: "0.02em",
                                display: "inline-block",
                            }}
                        >
                            Flavor
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {/* Card 1 */}
                        <div className="border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 bg-pink-500 border-black p-4 max-w-sm mx-auto rounded-3xl">
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <img
                                        src={team4}
                                        alt="about"
                                        className="w-96 h-80 object-cover border-2 rounded-2xl"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-black-500 text-xl font-bold">Michael Reynolds</p>
                                    <p className="text-white text-lg">Head Chef</p>
                                </div>
                                <div className="flex justify-center gap-6 md:gap-6 pt-5">
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Facebook size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-600 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Twitter size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Instagram size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Linkedin size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 bg-pink-500 border-black p-4 max-w-sm mx-auto rounded-3xl">
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <img
                                        src={team5}
                                        alt="about"
                                        className="w-96 h-80 object-cover border-2 rounded-2xl"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-black-500 text-xl font-bold">Laura Bennett</p>
                                    <p className="text-white text-lg">Marketing Manager</p>
                                </div>
                                <div className="flex justify-center gap-6 md:gap-6 pt-5">
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Facebook size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-600 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Twitter size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Instagram size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Linkedin size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 bg-pink-500 border-black p-4 max-w-sm mx-auto rounded-3xl">
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <img
                                        src={team3}
                                        alt="about"
                                        className="w-96 h-80 object-cover border-2 rounded-2xl"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-black-500 text-xl font-bold">James Carter</p>
                                    <p className="text-white text-lg">Restaurant Manager</p>
                                </div>
                                <div className="flex justify-center gap-6 md:gap-6 pt-5">
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Facebook size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-600 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Twitter size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Instagram size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Linkedin size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 bg-pink-500 border-black p-4 max-w-sm mx-auto rounded-3xl">
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <img
                                        src={team2}
                                        alt="about"
                                        className="w-96 h-80 object-cover border-2 rounded-2xl"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-black-500 text-xl font-bold">Sophia Collins</p>
                                    <p className="text-white text-lg">Experience Specialist</p>
                                </div>
                                <div className="flex justify-center gap-6 md:gap-6 pt-5">
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Facebook size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-600 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Twitter size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Instagram size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Linkedin size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Card 5 */}
                        <div className="border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 bg-pink-500 border-black p-4 max-w-sm mx-auto rounded-3xl">
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <img
                                        src={team6}
                                        alt="about"
                                        className="w-96 h-80 object-cover border-2 rounded-2xl"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-black-500 text-xl font-bold">Daniel Harris</p>
                                    <p className="text-white text-lg">Supply Chain Coordinator</p>
                                </div>
                                <div className="flex justify-center gap-6 md:gap-6 pt-5">
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Facebook size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-600 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Twitter size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Instagram size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Linkedin size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 bg-pink-500 border-black p-4 max-w-sm mx-auto rounded-3xl">
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <img
                                        src={team1}
                                        alt="about"
                                        className="w-96 h-80 object-cover border-2 rounded-2xl"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-black-500 text-xl font-bold">Emily Rivera</p>
                                    <p className="text-white text-lg">Social Media Manager</p>
                                </div>
                                <div className="flex justify-center gap-6 md:gap-6 pt-5">
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Facebook size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-600 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Twitter size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Instagram size={24} />
                                    </Link>
                                   <Link
                                       to =""
                                        className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                                    >
                                        <Linkedin size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
