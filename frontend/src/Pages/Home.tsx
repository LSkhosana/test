import React from 'react';
import { Navbar2} from '../Components/Navbar2'; // Update the path accordingly
import { Header5, Header5Props } from '../Components/Header5'; // Update the path accordingly
import { Header76} from '../Components/Header76'; // Adjust the path based on your project structure
import { features as Features} from '../Components/Features';
import {Testimonial1} from '../Components/testimonial'
import {Cta3} from '../Components/Cta3'
import { Contact14 } from '../Components/Contact14';
import { Footer1 } from '../Components/Footer1';
import header from '../Assets/heading.png';

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
    description:
      "We provide the best services to help you grow your business. At Easy Branding, we specialize in creating unique branded merchandise that elevates your business identity. From promotional products to printed marketing materials, we help you make a lasting impression.",
    buttons: [
      { title: "Get Started" },
      { title: "Learn More", variant: "secondary-alt" },
    ],
    image: {
      src: header,
      alt: "Your custom image",
    },
  };

  
  return (
    <div>
      <Navbar2 logo={logo} navLinks={navLinks} buttons={buttons} />
      <Header5 {...headerData} />
      <Header76 />
      <Features/>
      <Testimonial1/>
      <Cta3/>
      <Contact14/>
      <Footer1/>

      {/* Other content for your Home page */}
    </div>
  );
};

export default Home;
