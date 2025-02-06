import React from 'react'
import ExploreCategories from '../components/home/explorecategories'
import Lovedaily from "../components/home/lovedaily";
import Reviews from "../components/home/reviews";
import Hero from '../components/home/hero';
import Homemenu from "../components/home/homemenu";

export default function Home() {
  return (
    <>
    <Hero/>
    <Homemenu/>
    <Reviews/>
    <Lovedaily/>
    <ExploreCategories/>
    </>
  )
}
