import React from 'react';
import { Navbar2} from '../Components/Navbar2'; // Update the path accordingly
import { Contact5 } from '../Components/Contact5';
import { Mission } from '../Components/Mission';
import { Testimonial17 } from '../Components/Testimonial17';
import { Footer1 } from '../Components/Footer1';



const Contact: React.FC = () => {
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
      return (
        <div>
            <Navbar2 logo={logo} navLinks={navLinks} buttons={buttons} />
            <Contact5 />
            <Mission />
            <Testimonial17/>
            <Footer1 />
        </div>
      )
    
}

export default Contact;
