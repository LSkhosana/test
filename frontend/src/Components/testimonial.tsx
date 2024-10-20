type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type Props = {
    quote: string;
    logo: ImageProps;
    avatar: ImageProps;
    name: string;
    position: string;
    companyName: string;
  };
  
  export type Testimonial1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Testimonial1 = (props: Testimonial1Props) => {
    const { quote, logo, avatar, name, position, companyName } = {
      ...Testimonial1Defaults,
      ...props,
    } as Props;
    return (
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto w-full max-w-lg">
          <div className="flex flex-col items-center text-center">
            <img src={logo.src} alt={logo.alt} className="max-h-14 w-full" />
            <blockquote className="my-6 text-xl font-bold md:my-8 md:text-2xl">{quote}</blockquote>
            <div className="flex flex-col items-center justify-center">
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="mb-4 size-16 min-h-16 min-w-16 rounded-full object-cover"
              />
              <div className="flex flex-col items-center justify-center ">
                <p className="font-semibold">{name}</p>
                <p>
                  <span>{position}</span>, <span>{companyName}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export const Testimonial1Defaults: Testimonial1Props = {
    quote:
      '"Easy Branding can transform your promotional strategy with our exceptional products. Your brand visibility will skyrocket!"',
    logo: { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo" },
    avatar: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Testimonial avatar",
    },
    name: "Ayanda Sogula",
    position: "Managing Director",
    companyName: " Easy Branding",
  };
  