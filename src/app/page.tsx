'use client'

import FeaturedCourses from '@/components/FeaturedCourses';
import HeroSection from '@/components/HeroSection'
import Instructor from '@/components/Instructor';
import TestimonialCards from '@/components/TestimonialCards';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructor/>
    </div>
  );
}
