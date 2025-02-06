import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import review_img1 from "../../assets/review1.webp";
import review_img2 from "../../assets/review2.webp";
import review_img3 from "../../assets/review3.webp";
import review_img4 from "../../assets/review4.webp";
import quotes_img from "../../assets/quotes.png";

const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            text: "The food here is absolutely amazing! The flavors are rich and well-balanced, and the presentation is on point. I’ve been back multiple times, and each dish is better than the last.",
            name: "Sarah Martinez",
            position: "Food Enthusiast",
            image: review_img1
        },
        {
            text: "This restaurant never disappoints! The service is always excellent, and the dishes are packed with unique flavors that really stand out. Highly recommend trying the signature dish!",
            name: "Jason Williams",
            position: "Chef",
            image: review_img2
        },
        {
            text: "I absolutely love the variety of options here. Whether you're in the mood for something light or indulgent, they have something for everyone. The quality of ingredients is top-notch.",
            name: "Rachel Kim",
            position: "Nutritionist",
            image: review_img3
        },
        {
            text: "Every bite of food was a delightful experience. The flavors are perfectly balanced, and the food is made with fresh, high-quality ingredients. Can’t wait to come back for more!",
            name: "Emily Carter",
            position: "Food Blogger",
            image: review_img4
        }
    ];
    

    return (
        <div className="w-full px-4 md:px-8 py-8 bg-amber-200 flex flex-col items-center justify-center relative">
            <div className="text-center max-w-4xl mx-auto relative z-10">
                <h2 className="text-5xl md:text-8xl font-black mb-2 leading-tight">
                    TASTY REVIEWS
                </h2>
                <div className="text-5xl md:text-8xl font-black mb-2 leading-tight">
                    FROM{' '}
                    <span
                        className="text-5xl md:text-8xl font-black mb-2 leading-tight inline-block -rotate-2"
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
                        Fans
                    </span>
                </div>

                {/* Container for stars, review, and info with background quotes */}
                <div className="relative">
                    {/* Background quotes image */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
                        <img 
                            src={quotes_img} 
                            alt="Quotes" 
                            className="w-96 h-96 opacity-20"
                        />
                    </div>

                    {/* Content layer */}
                    <div className="relative z-10">
                        {/* Stars */}
                        <div className="flex justify-center mt-6 mb-8">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="text-red-500 text-3xl mx-1" />
                            ))}
                        </div>

                        {/* Review text */}
                        <div className="min-h-[200px] flex items-center justify-center mb-8">
                            <p className="text-xl md:text-2xl italic px-8">
                                {reviews[currentReview].text}
                            </p>
                        </div>

                        {/* Name and position */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold">{reviews[currentReview].name}</h3>
                            <p className="text-gray-600">{reviews[currentReview].position}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-8 pt-6">
                    {reviews.map((review, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`relative rounded-full overflow-hidden transition-all duration-300 ${
                                currentReview === index
                                    ? 'ring-4 ring-black-500 scale-110'
                                    : 'opacity-100 hover:opacity-75'
                            }`}
                        >
                            <img
                                src={review.image}
                                alt={`Profile of ${review.name}`}
                                className="w-16 h-16 object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;