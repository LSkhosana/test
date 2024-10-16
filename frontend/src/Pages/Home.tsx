import React from 'react';
import { Navbar2, Navbar2Props } from '../Components/Navbar2'; // Update the path accordingly

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
  ];

  const buttons = [
    {
      title: "Contact Us",
      size: "sm",
    },
  ];

  return (
    <div>
      <Navbar2 logo={logo} navLinks={navLinks} buttons={buttons} />
      {/* Other content for your Home page */}
    </div>
  );
};

export default Home;
