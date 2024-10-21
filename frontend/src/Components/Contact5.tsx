"use client";

import { useState } from "react";
import { Input, Label, Textarea, Button } from "@relume_io/relume-ui"; //add check box if needed
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  button: ButtonProps;
};

export type Contact5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact5 = (props: Contact5Props) => {
  const { tagline, heading, description, email, phone, address, button } = {
    ...Contact5Defaults,
    ...props,
  } as Props;

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  // const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      nameInput,
      emailInput,
      phoneInput,
      messageInput,
      // acceptTerms,
    });
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <p className="mb-3 font-semibold md:mb-4 text-orange-500">{tagline}</p>
          <div className="rb-6 mb-6 md:mb-8">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none text-orange-500" />
              <p>{email}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none text-orange-500" />
              <p>{phone}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none text-orange-500" />
              <p>{address}</p>
            </div>
          </div>
        </div>

        <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6" onSubmit={handleSubmit}>
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="phone" className="mb-2">
              Number
            </Label>
            <Input
              type="number"
              id="Number"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
            />
          </div>


          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </div>

          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            {/* <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
            <Label htmlFor="terms" className="cursor-pointer">
              I accept the{" "}
              <a
                className="text-link-primary underline"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms
              </a> 
            </Label> */}
          </div>

          <div>
            <Button {...button}>{button.title}</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const Contact5Defaults: Contact5Props = {
  tagline: "Contact",
  heading: "Contact us",
  description: "Get a free quote by filling in your details",
  email: "EasyBranding1@outlook.com",
  phone: "087 265 4909",
  address: " 61 camel thorn street fleurhof views unit B206 fleurhof, Florida 1709",
  button: { title: "Submit" },
};
