import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import WorkSection from '@/components/sections/work';

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AboutMeSection /> */}
      {/* <ExperienceSection />
      <WorkSection /> */}
      <SkillsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>
  );
}
