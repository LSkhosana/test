import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import back from '../Assets/printer-with-picture-mountain-it-1024x585 1.png'

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: React.ReactNode;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Cta3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta3 = (props: Cta3Props) => {
  const { heading, description, buttons, image } = {
    ...Cta3Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-base text-text-alternative md:text-md">{description}</p>
          <div className="mt-6 flex gap-x-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} className="  bg-orange-500 border-none" {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Cta3Defaults: Cta3Props = {
    heading: (
        <>
         Let's Elevate <br/> Your Brand Together
        </>
      ),
  description:
    " Let's work together to create marketing materials that represent your brand and inspire and engage your audience.",
  buttons: [{ title: "Button" }],
  image: {
    src: back,
    alt: "Relume placeholder image",
  },
};
