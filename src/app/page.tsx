import FeaturedCourses from '@/components/FeaturedCourses';
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[]">
      <HeroSection/>
      <FeaturedCourses/>
    </div>
  );
}
