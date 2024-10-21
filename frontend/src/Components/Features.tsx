// import { Button } from "@relume_io/relume-ui";
// import type { ButtonProps } from "@relume_io/relume-ui";
// import { RxChevronRight } from "react-icons/rx";
import digital from '../Assets/digital-asset-management.png'
import promote from '../Assets/promote.png'
import pakaging from '../Assets/packaging.png'
import flyer from '../Assets/flyer.png'

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  // buttons: ButtonProps[];
  features: FeaturesProps[];
  image: ImageProps;
};

export type featuresProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const features = (props: featuresProps) => {
  const { tagline, heading, description,  features } = {
    ...featuresDefaults,
    ...props,
  } as Props;
  return (
    <section id="features" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
          <div>
          <p className="mb-3 font-semibold md:mb-4 text-orange-500">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
            {/* <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div> */}
          </div>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="rb-5 mb-5 md:mb-6">
                  <img src={feature.icon.src} className="size-12" alt={feature.icon.alt} />
                </div>
                <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {feature.heading}
                </h1>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const featuresDefaults: featuresProps = {
  tagline: "Services",
  heading: "Discover Our Exceptional Branding Solutions Today",
  description:
    "Easy Branding provides a full suite of services designed to enhance your business identity. Our team excels in developing tailored branding solutions to meet your specific needs.",
  // buttons: [
  //   { title: "Button", variant: "secondary" },
  //   {
  //     title: "Button",
  //     variant: "link",
  //     size: "link",
  //     iconRight: <RxChevronRight />,
  //   },
  // ],
  features: [
    {
      icon: { src: pakaging, alt: "Relume logo 1" },
      heading: "Custom Branded Merchandise",
      description:
        "From sleek pens to stylish apparel, we offer a diverse range of merchandise that showcases your brand in the best light. ",
    },
    {
      icon: { src: promote, alt: "Relume logo 2" },
      heading: "Promotional Products",
      description:
        "Elevate your promotional strategies with our extensive selection of products tailored for events, trade shows, and giveaways.",
    },
    {
      icon: { src: flyer, alt: "Relume logo 3" },
      heading: "Printed Marketing Materials",
      description:
        "Brochures, flyers, business cards, and beyond – our printed materials are crafted precisely and creatively.",
    },
    {
      icon: { src: digital, alt: "Relume logo 4" },
      heading: "Digital Assets",
      description:
        "We provide expertly designed digital assets, including social media graphics, email templates, and digital brochures.",
    },
  ],
};
