import React from 'react';
import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blog2.jpg";
import blog3 from "../../assets/blogs/blog3.jpg";
import blog4 from "../../assets/blogs/blog4.jpg";
import blog5 from "../../assets/blogs/blog5.jpg";
import blog6 from "../../assets/blogs/blog6.png";
import team1 from "../../assets/team/team1.webp";
import team2 from "../../assets/team/team2.webp";
import team3 from "../../assets/team/team3.webp";
import team4 from "../../assets/team/team4.webp";
import team5 from "../../assets/team/team5.webp";
import team6 from "../../assets/team/team6.webp";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useParams } from 'react-router-dom';
const OtherblogData = [
  { id: 1, image: blog1, category: "Food Exploration", title: "BEST REGIONAL BURGERS TO TRY", readingTime: "5 MIN" },
  { id: 2, image: blog2, category: "FOOD PAIRING", title: "PAIRING BURGERS AND DRINKS", readingTime: "7 MIN" },
  { id: 3, image: blog3, category: "HEALTH AND NUTRITION", title: "5 HEALTHY FAST FOOD HACKS", readingTime: "5 MIN" },
  { id: 4, image: blog4, category: "FOOD INSIGHTS", title: "FAST FOOD MYTHS DEBUNKED", readingTime: "5 MIN" },
  { id: 5, image: blog5, category: "FOOD HISTORY", title: "HOW FRIES BECAME A FAVORITE", readingTime: "6 MIN" },
  { id: 6, image: blog6, category: "COOKING TIPS", title: "THE SECRET TO JUICY BURGERS", readingTime: "4 MIN" },
];
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
const randomBlogs = shuffleArray([...OtherblogData]).slice(0, 3);

const blogData = [
  {
    id: 1,
    image: blog1,
    category: "Food Exploration",
    title: "BEST REGIONAL BURGERS TO TRY",
    readingTime: "5 MIN",
    short_desc: "Explore unique burger styles from different regions that bring local flavors to life.",
    detail: `
      Burgers are one of the most beloved dishes across the world, but each region has its own take on this classic. From the deep fried, juicy burgers of the American South to the more delicate and inventive versions served in Europe, there is something for everyone. 
      
      In this blog, we will explore some of the best regional burgers you should try. These burgers reflect the unique flavors, ingredients, and cooking styles of their regions, and they offer a delicious way to experience the local culture.
      
      In the southern United States, you’ll find the legendary fried chicken burger — crispy chicken fillet served with southern-style coleslaw, pickles, and a tangy sauce on a buttery bun. It’s a mouthwatering combination that will have you coming back for more.

      Over in the Pacific Northwest, burgers are often paired with fresh, locally sourced ingredients, like smoked salmon, avocado, and crispy bacon. The Pacific Burger, featuring wild-caught salmon, is a must-try in this region.

      Heading to Europe, you’ll find a more refined burger experience. In the UK, the classic beef burger is often paired with sharp cheddar cheese and served with caramelized onions and horseradish sauce. In France, the gourmet burger comes topped with foie gras, truffle oil, and artisanal cheeses. Whether you’re in a cozy pub or an upscale bistro, European burgers offer a unique and delicious twist on the classic American version.
      
      Whether you’re in the U.S. or abroad, there is a regional burger waiting for you to try. These tasty variations will give you a taste of the local cuisine and make your burger experience more memorable. So, why not start your journey and try some of these regional favorites today?
    `,
    author_img: team5,
    author_name: "Laura Bennett",
    author_position: "Marketing Manager",
    author_socialmedia: {
      facebook: "https://www.facebook.com/laura.bennett",
      twitter: "https://twitter.com/laura_bennett",
      instagram: "https://instagram.com/laura_bennett",
      linkedin: "https://www.linkedin.com/in/laura-bennett",
    }
  },
  {
    id: 2,
    image: blog2,
    category: "FOOD PAIRING",
    title: "PAIRING BURGERS AND DRINKS",
    readingTime: "7 MIN",
    short_desc: "Elevate your fast food experience by matching burgers with the perfect beverages.",
    detail: `
    Elevate your fast food experience by matching burgers with the perfect beverages. 
    In this post, Emily Rivera, our Social Media Manager, shares expert tips on how to enhance your burger meals with drink pairings that complement the flavors perfectly. 
    Whether you're enjoying a classic cheeseburger or a bold gourmet option, the right drink can elevate the taste and bring a new level of enjoyment. 
    Join Emily as she explores the best food and drink combinations for a memorable fast food experience.`,
    author_img: team1,
    author_name: "Emily Rivera",
    author_position: "Social Media Manager",
    author_socialmedia: {
      facebook: "https://www.facebook.com/laura.bennett",
      twitter: "https://twitter.com/laura_bennett",
      instagram: "https://instagram.com/laura_bennett",
      linkedin: "https://www.linkedin.com/in/laura-bennett",
    }
  },
  {
    id: 3,
    image: blog3,
    category: "HEALTH AND NUTRITION",
    title: "5 HEALTHY FAST FOOD HACKS",
    readingTime: "5 MIN",
    short_desc: "Learn simple ways to enjoy your favorite fast food meals without compromising your health goals.",
    detail: `In today's fast-paced world, it’s easy to resort to fast food for convenience, but maintaining a healthy diet while enjoying your favorite comfort meals can seem challenging. 
    This blog post will guide you through five simple yet effective hacks that allow you to indulge in fast food while staying true to your health goals. 
    From making smarter choices at the counter to adding healthier toppings, we’ll explore creative solutions that won’t derail your nutritional plans. 
    Whether you’re craving a burger, fries, or pizza, these easy adjustments will help you enjoy fast food in a healthier way without sacrificing flavor.
    Join Daniel Harris, our expert Supply Chain Coordinator, as he shares these hacks that will change the way you think about fast food. 
    Discover how to make better choices without feeling deprived, and learn why it’s important to incorporate healthier options into your lifestyle.
    Ready to eat fast food the healthy way? Let’s dive in!`,
    author_img: team6,
    author_name: "Daniel Harris",
    author_position: "Supply Chain Coordinator",
    author_socialmedia: {
      facebook: "https://www.facebook.com/laura.bennett",
      twitter: "https://twitter.com/laura_bennett",
      instagram: "https://instagram.com/laura_bennett",
      linkedin: "https://www.linkedin.com/in/laura-bennett",
    }
  },
  {
    id: 4,
    image: blog4,
    category: "FOOD INSIGHTS",
    title: "FAST FOOD MYTHS DEBUNKED",
    readingTime: "5 MIN",
    short_desc: "Uncover the truth behind common fast food myths and misconceptions.",
    detail: `Fast food often gets a bad reputation, but many of the myths surrounding it are far from the truth. 
    In this blog post, we will take a deep dive into some of the most common fast food misconceptions and uncover the truth behind them. 
    From the myth that all fast food is unhealthy to the belief that it's always low in nutrients, we’re here to debunk the myths that have kept people from enjoying fast food in moderation.
    Sophia Collins, our Experience Specialist, brings a fresh perspective to this topic, helping you understand the facts that often get overshadowed by misinformation.
     Whether it’s the nutritional value, preparation methods, or the ingredients used, we’ll give you the facts you need to make informed choices.
    If you’ve ever wondered whether fast food can fit into a healthy lifestyle or if it’s always as bad as it’s made out to be, this post is for you. 
    Get ready to challenge everything you thought you knew about fast food and learn the truths that will change the way you approach your next meal.`,
    author_img: team2,
    author_name: "Sophia Collins",
    author_position: "Experience Specialist",
    author_socialmedia: {
      facebook: "https://www.facebook.com/laura.bennett",
      twitter: "https://twitter.com/laura_bennett",
      instagram: "https://instagram.com/laura_bennett",
      linkedin: "https://www.linkedin.com/in/laura-bennett",
    }
  },
  {
    id: 5,
    image: blog5,
    category: "FOOD HISTORY",
    title: "HOW FRIES BECAME A FAVORITE",
    readingTime: "6 MIN",
    short_desc: "Dive into the history of French fries and how they became a global fast food staple.",
    detail: `French fries have become a global fast food staple, but how did this humble dish evolve into the beloved snack we know today? In this blog post, we’ll take you on a historical journey to uncover the origins of fries and how they gained worldwide popularity. 
    From their uncertain beginnings in Belgium and France to their transformation into a fast food icon, we’ll explore the cultural impact of fries across different countries and cuisines.
    James Carter, our Restaurant Manager, provides a unique insight into the evolution of this crispy delicacy, exploring its significance in the culinary world. Learn about the different variations, how they became a favorite in fast food chains, and why they’re so universally adored.
    Whether you're a fry enthusiast or just curious about the story behind your favorite side dish, this post will give you all the details on how French fries became a global phenomenon.`,
    author_img: team3,
    author_name: "James Carter",
    author_position: "Restaurant Manager",
    author_socialmedia: {
      facebook: "https://www.facebook.com/laura.bennett",
      twitter: "https://twitter.com/laura_bennett",
      instagram: "https://instagram.com/laura_bennett",
      linkedin: "https://www.linkedin.com/in/laura-bennett",
    }
  },
  {
    id: 6,
    image: blog6,
    category: "COOKING TIPS",
    title: "THE SECRET TO JUICY BURGERS",
    readingTime: "4 MIN",
    short_desc: "Discover the techniques that make every burger patty tender, juicy, and bursting with flavor.",
    detail: `There’s nothing quite like biting into a juicy, flavorful burger, but achieving that perfect patty is an art. 
    In this blog post, we’ll uncover the secrets to making every burger tender, juicy, and packed with flavor. 
    From selecting the right meat to mastering the cooking techniques, we’ll share expert tips that will elevate your burger game.
    Michael Reynolds, our Head Chef, walks you through the essential steps to ensure your burgers turn out perfectly every time. 
    Learn how to season your meat, avoid common mistakes, and get that perfect sear. Whether you’re grilling in the backyard or cooking up burgers in your kitchen, these tips will help you create mouthwatering patties that will have everyone asking for more.
    If you're ready to take your burger-making skills to the next level and create patties that are juicy and bursting with flavor, this post is for you!`,
    author_img: team4,
    author_name: "Michael Reynolds",
    author_position: "Head Chef",
    author_socialmedia: {
      facebook: "https://www.facebook.com/laura.bennett",
      twitter: "https://twitter.com/laura_bennett",
      instagram: "https://instagram.com/laura_bennett",
      linkedin: "https://www.linkedin.com/in/laura-bennett",
    }
  },
];


const BlogPost = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Split the detail into separate paragraphs by line breaks
  const paragraphs = blog.detail.split('\n');

  return (
    <>
      <div className="p-6">
        <article className="max-w-8xl mx-4 sm:mx-10 md:mx-14">
          <div className="flex gap-4 text-sm mb-4 flex-wrap">
            <div className="flex items-center">
              <span className="text-black-500">Category:</span>
              <span className="font-medium text-black-500 text-base ml-1">{blog.category}</span>
            </div>
            <div className="flex items-center">
              <span className="text-black-500">Reading Time:</span>
              <span className="font-medium text-black-500 text-base ml-1">{blog.readingTime}</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 tracking-tight leading-tight">
            {blog.title}
          </h1>

          <p className="text-xl text-black-500 pt-8">
            {blog.short_desc}
          </p>

          {/* Image Section */}
          <div className="flex justify-center mt-12">
            <div className="w-full max-w-8xl rounded-3xl overflow-hidden">
              <img
                src={blog.image}
                alt="Four burgers being held against orange background"
                className="w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover rounded-3xl mx-auto border-4 border-black-500"
              />
            </div>
          </div>

          {/* Two-Part Section */}
          <div className="flex gap-12 flex-col sm:flex-row mt-16">
            {/* Left Section with Image */}
            <div className="w-full sm:w-1/4 text-center mb-8 sm:mb-0">
              <img
                src={blog.author_img}
                alt="Burger detail"
                className="w-32 h-32 object-cover rounded-full border-4 border-black-500 mx-auto"
              />
              <p className="mt-2 text-lg text-black-500">{blog.author_name}</p>
              <p className="text-base text-black-500">{blog.author_position}</p>

              {/* Social Media Icons */}
              <div className="flex flex-col items-center gap-4 pt-5">
                {blog.author_socialmedia.facebook && (
                  <Link
                    to={blog.author_socialmedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                  >
                    <Facebook size={24} />
                  </Link>
                )}
                {blog.author_socialmedia.twitter && (
                  <Link
                    to={blog.author_socialmedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-500 bg-yellow-500 hover:bg-yellow-600 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                  >
                    <Twitter size={24} />
                  </Link>
                )}
                {blog.author_socialmedia.instagram && (
                  <Link
                    to={blog.author_socialmedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                  >
                    <Instagram size={24} />
                  </Link>
                )}
                {blog.author_socialmedia.linkedin && (
                  <Link
                    to={blog.author_socialmedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2"
                  >
                    <Linkedin size={24} />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Section with Content */}
            <div className="w-full sm:w-3/4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-xl text-black-500 pb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
      <div className="w-full px-4 md:px-8 py-8 bg-amber-200 flex flex-col">
        <h2 className="text-5xl md:text-8xl font-black mb-2 leading-tight">OTHER POSTS</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {randomBlogs.map((blog) => (
          <Link
          key={blog.id}
          to={`/blog-posts/${blog.id}`}
          onClick={() => window.scrollTo(0, 0)} // Scroll to the top of the page
        >
            <div className="group relative w-full">
              <div className="relative bg-orange-100 rounded-3xl overflow-hidden h-[400px]">
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-black-500 text-white-500 text-xs font-bold px-4 py-1.5 rounded-lg">
                    {blog.category}
                  </div>
                </div>

                <div className="w-full h-[300px] p-4">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover border-4 border-r-8 border-b-8 rounded-2xl"
                    />
                  </div>
                </div>

                <div className="absolute bottom-8 left-5 right-5">
                  <div className="bg-pink-500 rounded-2xl border-4 p-2">
                    <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg">READING TIME: {blog.readingTime}</span>
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
          </Link>
        ))}
      </div>
    </>

  );
};


export default BlogPost;
