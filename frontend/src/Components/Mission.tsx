type Props = {
    tagline: string;
    heading: string;
    description: string;
  };
  
  export type MissionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Mission = (props: MissionProps) => {
    const {tagline, heading, description } = {
      ...MissionDefaults,
      ...props,
    } as Props;
    return (
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <p className="mb-3 font-semibold md:mb-4 text-orange-500">{tagline}</p>
        <div className="container grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
            <p className="md:text-md">{description}</p>
        </div>
      </section>
    );
  };
  
  export const MissionDefaults: MissionProps = {
    tagline: 'Our mission',
    heading: "Your Partner in Custom Branding and Promotional Solutions ",
    description:
      "Our mission is simple yet powerful: to empower businesses with vibrant, high-quality marketing materials that reflect their unique value and vision. We are dedicated to delivering creative solutions that enhance your brand's presence and make a lasting impression on your audience.",
  };
  