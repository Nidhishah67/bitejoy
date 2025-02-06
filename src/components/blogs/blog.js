import React from "react";
import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blog2.jpg";
import blog3 from "../../assets/blogs/blog3.jpg";
import blog4 from "../../assets/blogs/blog4.jpg";
import blog5 from "../../assets/blogs/blog5.jpg";
import blog6 from "../../assets/blogs/blog6.png";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const blogData = [
    {
        id: 1,
        image: blog1,
        category: "Food Exploration",
        title: "BEST REGIONAL BURGERS TO TRY",
        readingTime: "5 MIN",
    },
    {
        id: 2,
        image: blog2,
        category: "FOOD PAIRING",
        title: "PAIRING BURGERS AND DRINKS",
        readingTime: "7 MIN",
    },
    {
        id: 3,
        image: blog3,
        category: "HEALTH AND NUTRITION",
        title: "5 HEALTHY FAST FOOD HACKS",
        readingTime: "5 MIN",
    },
    {
        id: 4,
        image: blog4,
        category: "FOOD INSIGHTS",
        title: "FAST FOOD MYTHS DEBUNKED",
        readingTime: "5 MIN",
    },
    {
        id: 5,
        image: blog5,
        category: "FOOD HISTORY",
        title: "HOW FRIES BECAME A FAVORITE",
        readingTime: "6 MIN",
    },
    {
        id: 6,
        image: blog6,
        category: "COOKING TIPS",
        title: "THE SECRET TO JUICY BURGERS",
        readingTime: "4 MIN",
    },
];

const Blog = () => {
    return (
        <>
            <div className="w-full px-4 md:px-8 py-8 bg-amber-200 flex flex-col items-center justify-center">
                <div className="text-center">
                    <h2 className="text-5xl md:text-9xl font-black mb-2 leading-tight">
                        OUR{" "}
                        <div
                            className="text-5xl md:text-9xl relative"
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
                            Blog
                        </div>
                    </h2>
                </div>
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {blogData.map((blog) => (
                    <Link key={blog.id} to={`/blog-posts/${blog.id}`}>  {/* Add link to navigate to detailed blog post */}
                        <BlogCard 
                            image={blog.image} 
                            category={blog.category} 
                            title={blog.title} 
                            readingTime={blog.readingTime} 
                        />
                    </Link>
                ))}
            </div>

            <div className="w-full px-4 md:px-8 py-8 bg-amber-200 flex flex-col items-center justify-center">
                <div className="text-center">
                    <h2 className="text-5xl md:text-8xl font-black mb-2 leading-tight">
                        SUBSCRIBE TO OUR{" "}
                    </h2>
                    <div
                        className="text-5xl md:text-9xl relative"
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
                        NewsLetter
                    </div>
                </div>
            </div>

            {/* Subscription Form */}
            <div className="border-4 border-black p-8 pb-8 mt-8 max-w-md sm:max-w-xl mx-auto rounded-3xl mb-16">
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="w-full px-4 py-2 border-2 border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border-2 border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <button className="w-full text-base bg-black-500 text-white-500 py-2 rounded-3xl">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </>
    );
};

const BlogCard = ({ image, category, title, readingTime }) => {
    return (
        <div className="group relative w-full">
            {/* Main card container */}
            <div className="relative bg-orange-100 rounded-3xl overflow-hidden h-[400px]">
                {/* Category label */}
                <div className="absolute top-4 left-4 z-10">
                    <div className="bg-black-500 text-white-500 text-xs font-bold px-4 py-1.5 rounded-lg">
                        {category}
                    </div>
                </div>

                {/* Image container */}
                <div className="w-full h-[300px] p-4">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover border-4 border-r-8 border-b-8 rounded-2xl"
                        />
                    </div>
                </div>

                {/* Details card */}
                <div className="absolute bottom-8 left-5 right-5">
                    <div className="bg-pink-500 rounded-2xl border-4 p-2">
                        <h3 className="text-2xl font-bold mb-2">{title}</h3>
                        <div className="flex items-center justify-between">
                            <span className="text-lg">READING TIME: {readingTime}</span>
                            <div className="bg-black-500 rounded-lg p-2">
                                <div className="bg-black-500 rounded-lg p-2 flex items-center justify-center">
                                    <ArrowUpRight className="w-4 h-4 text-white-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
