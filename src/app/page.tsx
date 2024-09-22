"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import EmailForm from "./components/EmailForm";
import SuccessModal from "./components/SuccessModal";
import HeroMobile from "../../public/illustration-sign-up-mobile.svg";
import HeroDesktop from "../../public/illustration-sign-up-desktop.svg";

type Inputs = {
  email: string;
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty, isValid, isSubmitSuccessful },
  } = useForm<Inputs>({
    mode: "onChange",
    reValidateMode: "onSubmit",
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => setEmail(data.email);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: "" });
    }
  });

  function onClick() {
    if (!errors.email) {
      onSubmit;
      setModalIsOpen(true);
    }
  }

  console.log(watch("email")); // watch input value by passing the name of it
  console.log(errors);

  const listImage = "before:content-checkmark before:pr-4 before:align-top";
  /* the listImage uses :before content for more precise styling than list-image allowed */

  return (
    <>
      <div className="min-h-screen w-full bg-white lg:bg-darkNavy flex flex-col items-center justify-center">
        <div
          id="card"
          className="flex flex-col min-h-screen lg:min-h-0 lg:w-[58rem] lg:flex-row-reverse items-center gap-10 lg:gap-16 pb-10 lg:p-6
          bg-white lg:rounded-[2.25rem]"
        >
          <Image
            src={HeroMobile}
            alt="illustration of screen for mobile signup"
            className="block lg:hidden w-full rounded-b-lg overflow-hidden"
          />
          <Image
            src={HeroDesktop}
            alt="illustration of screen for desktop signup"
            className="hidden lg:block w-[25rem] rounded-b-lg overflow-hidden"
          />
          <div className="flex flex-col px-6 gap-6">
            <h1 className=" font-bold text-[2.5rem] leading-none">
              Stay updated!
            </h1>
            <p className="text-base">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ol
              role="list"
              className="flex flex-col list-outside list-image-none pl-4 -indent-4 gap-[0.62rem]"
              /* margin left is width of image+ 1 rem */
            >
              <li className={listImage}>
                Product discovery and building what matters
              </li>
              <li className={listImage}>
                Measuring to ensure updates are a success
              </li>
              <li className={listImage}>And much more!</li>
            </ol>
            <EmailForm
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              isValid={isValid}
              isDirty={isDirty}
              onClick={onClick}
              // Added this state so that i could get a default of disabled
            />
          </div>
        </div>
        <SuccessModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          email={email}
        />
      </div>
    </>
  );
}
