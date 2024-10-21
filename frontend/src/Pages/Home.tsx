import React from 'react';
import { Navbar2} from '../Components/Navbar2'; // Update the path accordingly
import { Header5 } from '../Components/Header5'; // Update the path accordingly
import { Header76} from '../Components/Header76'; // Adjust the path based on your project structure
import { features as Features} from '../Components/Features';
import {Testimonial1} from '../Components/testimonial'
import {Cta3} from '../Components/Cta3'
import { Contact14 } from '../Components/Contact14';
import { Footer1 } from '../Components/Footer1';

const Home: React.FC = () => {
 
  return (
    <div>
      <Navbar2 />
      <Header5 />
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
