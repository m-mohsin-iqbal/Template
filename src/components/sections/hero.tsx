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
            I&apos;m a highly skilled Full-stack developer, specializing in the development of modern web applications with a primary focus on frontend excellence using React, Next.js, and TypeScript. My proficiency extends to designing complex UI components, managing data flows through Redux/Flux, and optimizing performance for seamless user experiences.
            </Typography>
            <Typography className='text-justify'>
            In addition to my frontend expertise, I bring comprehensive knowledge of AWS cloud services and deployment strategies, including proficiency in setting up CI/CD pipelines. My hands-on experience encompasses backend development using Node.js, Express, and Mongoose to construct high-performing server-side APIs.
            </Typography>
            <Typography className='text-justify'>
            Furthermore, I possess advanced skills in Python web scraping using Scrapy, showcasing my expertise in data extraction. Beyond technical capabilities, I have a keen understanding of customer business needs, allowing me to propose effective business solutions that align with their objectives. My ability to bridge the gap between technical excellence and business requirements ensures a holistic and impactful approach to web development.
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
