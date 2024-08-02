import FeaturedCources from "@/components/FeaturedCources";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import   MusicSchoolTestimonials  from "@/components/TestimonialCards";
import  UpcomingWebinars  from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-center text-3xl">music web by Bishal ...</h1>
      <HeroSection/>
      <FeaturedCources/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
