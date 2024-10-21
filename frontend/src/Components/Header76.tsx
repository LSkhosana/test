// Header76.tsx
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import img1 from '../Assets/IMG-20241011-WA0008.png';
import img2 from '../Assets/IMG-20241011-WA0009.png';
import img3 from '../Assets/IMG-20241011-WA0010.png';
import img4 from '../Assets/IMG-20241011-WA0011.png';
import img5 from '../Assets/IMG-20241011-WA0012.png';
import img6 from '../Assets/IMG-20241011-WA0013.png';
import img7 from '../Assets/IMG-20241011-WA0014.png';
import img8 from '../Assets/IMG-20241011-WA0015.png';
import img9 from '../Assets/IMG-20241011-WA0016.png';
import img10 from '../Assets/IMG-20241011-WA0017.png';
import img11 from '../Assets/IMG-20241011-WA0018.png';
import img12 from '../Assets/IMG-20241011-WA0019.png';
import img13 from '../Assets/IMG-20241011-WA0020.png';
import img15 from '../Assets/IMG-20241011-WA0022.png';


type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: React.ReactNode; // Change from string to React.ReactNode
  description: React.ReactNode;
  buttons: ButtonProps[];
  images: ImageProps[];
};

export type Header76Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header76 = (props: Header76Props) => {
  const { heading, description, buttons, images } = {
    ...Header76Defaults,
    ...props,
  } as Props;

  return (
    <section
      id="relume"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
        <p className="md:text-md">{description}</p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} className="  bg-orange-500 border-none"{...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header76Defaults: Header76Props = {
  heading: (
    <>
      Branding Made
      <br /> Easy
    </>
  ),  
  description: (
    <>
      Welcome to Easy Branding, where your brand's potential meets our passion
      for perfection! At Easy Branding, we believe that every company, no
      matter its size, deserves a standout identity.
      <br />
      <br />
      We specialize in providing top-notch, company-branded marketing
      materials designed to captivate and convert. With an energetic approach
      and a commitment to excellence, we make branding effortless, impactful,
      and fun.
    </>
  ),
  buttons: [{ title: "Button" }],
  images: [
    {
      src: img1,
      alt: "Relume placeholder image 1",
    },
    {
      src: img2,
      alt: "Relume placeholder image 2",
    },
    {
      src: img3,
      alt: "Relume placeholder image 3",
    },
    {
      src: img4,
      alt: "Relume placeholder image 4",
    },
    {
      src: img5,
      alt: "Relume placeholder image 5",
    },
    {
      src: img6,
      alt: "Relume placeholder image 6",
    },
    {
      src: img7,
      alt: "Relume placeholder image 6",
    },{
      src: img8,
      alt: "Relume placeholder image 6",
    },{
      src: img9,
      alt: "Relume placeholder image 6",
    },{
      src: img10,
      alt: "Relume placeholder image 6",
    },
    {
      src: img11,
      alt: "Relume placeholder image 6",
    },{
      src: img12,
      alt: "Relume placeholder image 6",
    },
    {
      src: img13,
      alt: "Relume placeholder image 6",
    },
    {
      src: img15,
      alt: "Relume placeholder image 6",
    },
  ],
};
