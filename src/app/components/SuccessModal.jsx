"use client";
import IconSuccess from "../../../public/icon-success.svg";
import Image from "next/image";
import Modal from "react-modal";

export default function SuccessModal({ email, modalIsOpen, setModalIsOpen }) {
  function onRequestClose() {
    setModalIsOpen(false);
  }

  return (
    <Modal onRequestClose isOpen={modalIsOpen} contentLabel="Thank you for subscribing modal" overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-[#36384D]" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full lg:w-[31.5rem] lg:h-[32.5rem] bg-white lg:rounded-[2.25rem]">
      <div className="max-h-svh h-full flex flex-col justify-between lg:justify-center items-start pt-[12vh] px-6 lg:pt-7 lg:px-11 pb-10 lg:pb-7">
        <div className="w-full">
          <Image
            src={IconSuccess}
            alt="checkmark"
          />
          <h1 className=" font-bold text-[2.25rem] lg:text-[3.5rem] leading-none pt-10 pb-6">
            Thanks for subscribing!
          </h1>
          <p>
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription
          </p>
        </div>
        
        <button
          onClick={onRequestClose}
          className="flex flex-col items-center justify-center w-full bg-darkNavy text-white h-[3.5rem] font-bold rounded-lg cursor-pointer hover:bg-gradient-to-bl from-[#FF6A3A] to-[#FF527B] hover:shadow-3xl lg:mt-10"
        >
          Dismiss Message
        </button>
      </div>
    </Modal>
  );
}
