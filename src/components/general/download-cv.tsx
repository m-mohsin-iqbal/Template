'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button>
      <a href="https://mohsin-resume.s3.ap-south-1.amazonaws.com/Mohsin-Iqbal-Resume.pdf" target='_blank'>
      Download CV
      </a>
    </Button>
  );
};

export default DownloadCV;
