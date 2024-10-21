import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import header from '../Assets/heading.png';
import { Link } from 'react-router-dom';



type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header5 = (props: Header5Props) => {
  const { heading, description, buttons, image } = {
    ...Header5Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="relative px-[5%] h-[45rem]">
      <div className="container">
        <div className="flex max-h-[70rem] min-h-svh items-center py-16 md:py-24 lg:py-28 2xl:min-h-70">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-base text-text-alternative md:text-md">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                button.url ? (
                  <Link key={index} to={button.url}>
                    <Button
                      className={`px-6 py-2 border-none ${
                        button.title === "Get Started"
                          ? "bg-orange-500"
                          : button.variant === "secondary-alt"
                          ? "border-[1px] border-b-gray-50"
                          : ""
                      }`}
                      {...button}
                    >
                      {button.title}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={index}
                    className={`px-6 py-2 border-none ${
                      button.title === "Get Started"
                        ? "bg-orange-500"
                        : button.variant === "secondary-alt"
                        ? "border-[1px] border-b-gray-50"
                        : ""
                    }`}
                    {...button}
                  >
                    {button.title}
                  </Button>
                )
              ))}
            </div>

          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/70" />
      </div>
    </section>
  );
};

export const Header5Defaults: Header5Props = {
  heading: "Elevate Your Brand, Simplify Your Success",
  description:
    "We provide the best services to help you grow your business. At Easy Branding, we specialize in creating unique branded merchandise that elevates your business identity. From promotional products to printed marketing materials, we help you make a lasting impression.",
  buttons: 
  [
    { title: "Get Started",
      url:"/contact",
     }, 
    { title: "100+ Clients", variant: "secondary-alt" }
  ],
  image: {
    src: header,
    alt: "Relume placeholder image",
  },
};
