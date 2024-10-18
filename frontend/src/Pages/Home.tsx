import React from 'react';
import { Navbar2, Navbar2Props } from '../Components/Navbar2'; // Update the path accordingly
import { Header5, Header5Props } from '../Components/Header5'; // Update the path accordingly
import { Header76, Header76Props } from '../Components/Header76'; // Adjust the path based on your project structure
import header from '../Assets/heading.png'
import img1 from '../Assets/IMG-20241011-WA0008.png'
import img2 from '../Assets/IMG-20241011-WA0009.png'
import img3 from '../Assets/IMG-20241011-WA0010.png'
import img4 from '../Assets/IMG-20241011-WA0011.png'
import img5 from '../Assets/IMG-20241011-WA0012.png'
import img6 from '../Assets/IMG-20241011-WA0013.png'
import img7 from '../Assets/IMG-20241011-WA0014.png'
import img8 from '../Assets/IMG-20241011-WA0015.png'
import img9 from '../Assets/IMG-20241011-WA0016.png'
import img10 from '../Assets/IMG-20241011-WA0017.png'
import img11 from '../Assets/IMG-20241011-WA0018.png'
import img12 from '../Assets/IMG-20241011-WA0019.png'
import img13 from '../Assets/IMG-20241011-WA0020.png'
import img14 from '../Assets/IMG-20241011-WA0021.png'
import img15 from '../Assets/IMG-20241011-WA0022.png'

const Home: React.FC = () => {
  const logo = {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  };

  const navLinks = [
    { title: "Home", url: "#" },
    { title: "About", url: "#" },
    { title: "Services", url: "#" },
    { title: "Pricing", url: "#" },
  ];

  const buttons = [
    {
      title: "Contact Us",
      size: "sm",
    },
  ];

  // Header5 props
  const headerData: Header5Props = {
    heading: "Elevate Your Brand, Simplify Your Success",
    description: "We provide the best services to help you grow your businessAt Easy Branding, we specialize in creating unique branded merchandise that elevates your business identity. From promotional products to printed marketing materials, we help you make a lasting impression.",
    buttons: [
      { title: "Get Started" },
      { title: "Learn More", variant: "secondary-alt" },
    ],
    image: {
      src: header,
      alt: "Your custom image",
    },
  };

  const customProps: Header76Props = {
    heading: (
      <>
        Branding Made<br /> Easy
      </>
    ),
    description: (
      <>
       Welcome to Easy Branding, where your brand's potential meets our passion for perfection! At Easy Branding, we believe that every company, no matter its size, deserves a standout identity.<br></br><br/>
      We specialize in providing top-notch, company-branded marketing materials designed to captivate and convert. With an energetic approach and a commitment to excellence, we make branding effortless, impactful, and fun.
      </>
    ),
    buttons: [
      { title: "Learn More" }
    ],
    images: [
      { src: img1, alt: "Image 1" },
      { src: img2, alt: "Image 2" },
      { src: img3, alt: "Image 3" },
      { src: img4, alt: "Image 4" },
      { src: img5, alt: "Image 5" },
      { src: img6, alt: "Image 6" },
      { src: img7, alt: "Image 7" },
      { src: img8, alt: "Image 8" },
      { src: img9, alt: "Image 9" },
      { src: img10, alt: "Image 10" },
      { src: img11, alt: "Image 11" },
      { src: img12, alt: "Image 12" },
      { src: img13, alt: "Image 13" },
      { src: img14, alt: "Image 14" },
      { src: img15, alt: "Image 15" },

      

      // Add more images as needed
    ],
  };


  return (
    <div>
      <Navbar2 logo={logo} navLinks={navLinks} buttons={buttons} />
      <Header5 {...headerData} />
      <Header76 {...customProps} />

      {/* Other content for your Home page */}
    </div>
  );
};

export default Home;
