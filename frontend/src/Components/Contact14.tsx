import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import ways from '../Assets/Screenshot 2024-10-21 101322.png'


type ImageProps = {
  src: string;
  alt?: string;
};

type LinkProps = {
  label: string;
  url: string;
};

type Map = {
  url: string;
  image: ImageProps;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: LinkProps;
  button?: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: Contact[];
  map: Map;
};

export type Contact14Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact14 = (props: Contact14Props) => {
  const { tagline, heading, description, contacts, map } = {
    ...Contact14Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 text-orange-500">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            {contacts.map((contact, index) => (
              <div key={index}>
                <div className="mb-3 md:mb-4 text-orange-500">{contact.icon}</div>
                <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">{contact.title}</h3>
                <p className="mb-2">{contact.description}</p>
                {contact.title === "Office" && contact.button ? (
                  <div className="mt-5 md:mt-6">
                    
                    <Button {...contact.button}>{contact.button.title}</Button>
                  </div>
                ) : (
                  contact.link && (
                    <a className="underline" href={contact.link.url}>
                      {contact.link.label}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
          {/* insert your map code here */}
          <a href={map.url} className="justify-self-end md:w-[321.6px] lg:w-auto">
            <img
              src={map.image.src}
              alt={map.image.alt}
              className="size-full h-[400px] object-cover md:h-[516px] "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export const Contact14Defaults: Contact14Props = {
  tagline: "Location",
  heading: "Where To Find Us",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  contacts: [
    {
      icon: <BiEnvelope className="size-8" />,
      title: "Email",
      description: "Send us an Email at",
      link: {
        label: "Easybranding1@outlook.com",
        url: "#",
      },
    },
    {
      icon: <BiPhone className="size-8" />,
      title: "Phone",
      description: "Give us a call on",
      link: {
        label: "087-265-4909",
        url: "#",
      },
    },
    {
      icon: <BiMap className="size-8" />,
      title: "Office",
      description: "61 camel thorn street fleurhof views unit B206 fleurhof, Florida 1709",
      button: {
        title: "Get Directions",
        url: "https://www.google.com/maps/place/Fleurhof+Views+Madulammoho+Housing/@-26.2632534,27.8121612,16.64z/data=!4m6!3m5!1s0x1e95a08e85e9f51b:0x93eeddd549ecbb05!8m2!3d-26.2632233!4d27.8129871!16s%2Fg%2F11cryfz9mn?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
  map: {
    url: "https://www.google.com/maps/place/Fleurhof+Views+Madulammoho+Housing/@-26.2632534,27.8121612,16.64z/data=!4m6!3m5!1s0x1e95a08e85e9f51b:0x93eeddd549ecbb05!8m2!3d-26.2632233!4d27.8129871!16s%2Fg%2F11cryfz9mn?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D",
    image: {
      src: ways,
      alt: "Relume placeholder map image",
    },
  },
};
