import Image from 'next/image';
import { MapPin } from 'lucide-react';

import MohsinHeadshot from '/public/images/profile.jpg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={MohsinHeadshot}
              alt="Headshot of Mohsin"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Mohsin Iqbal
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography className='text-justify'>
            With over 4 years of experience, I am a seasoned Full-stack developer specializing in top-tier frontend development using React, Next.js, and TypeScript. Proficient in crafting intricate UI components, overseeing data flows with Redux/Flux, and optimizing performance, my expertise ensures a high-quality user experience.
            </Typography>
            <Typography className='text-justify'>
            In backend development, I excel in Node.js, Express, and Mongoose, contributing to high-performance server-side APIs within the MERN stack. Advanced Python web scraping skills with Scrapy highlight my data extraction expertise.
            </Typography>
            <Typography className='text-justify'>
            Beyond technical prowess, I understand customer business needs, proposing effective solutions aligned with objectives. Bridging the gap between technical excellence and business requirements, I bring a holistic approach to web development.
            </Typography>
            <Typography className='text-justify'>
            Additionally, I possess comprehensive knowledge of AWS cloud services, adept at deploying strategies, and skilled in setting up CI/CD pipelines.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Lahore, Pakistan</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
