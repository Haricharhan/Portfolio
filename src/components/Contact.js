import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";

const CONTACT_EMAIL = "bolluharicharhan@gmail.com";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.info("Please contact Hari directly by email or LinkedIn.");
      return;
    }

    setIsSending(true);
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      toast.success("Thanks — your message has been sent.");
      formRef.current.reset();
    } catch {
      toast.error("Unable to send the message. Please use the email link instead.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="body-font" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div id="contact" className="mb-8 text-center">
          <h2 id="contact-heading" className="text-3xl font-semibold text-black sm:text-4xl">Let’s work together</h2>
          <p className="mt-2 text-lg font-medium text-dark-orange">Open to entry-level data analytics opportunities</p>
        </div>
        <div className="grid gap-8 rounded-2xl bg-darkblue p-5 md:grid-cols-2 md:p-8">
          <div className="flex flex-col justify-center text-white">
            <h3 className="text-2xl font-semibold text-[#FFCCA8]">Get in touch</h3>
            <p className="mt-3 max-w-md leading-relaxed text-white/85">For roles, collaborations, or a conversation about data, the fastest route is email or LinkedIn.</p>
            <div className="mt-5"><SocialHandles /></div>
            <ul className="mt-5 space-y-4">
              <li className="flex items-center gap-3"><FaEnvelope aria-hidden="true" /><a className="underline decoration-white/40 underline-offset-4 hover:text-[#FFCCA8]" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              <li className="flex items-center gap-3"><FaPhoneAlt aria-hidden="true" /><a className="underline decoration-white/40 underline-offset-4 hover:text-[#FFCCA8]" href="tel:+917981896579">+91 79818 96579</a></li>
              <li className="flex items-center gap-3"><FaMapMarkerAlt aria-hidden="true" /><span>Karimnagar, Telangana, India</span></li>
            </ul>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="rounded-xl bg-[#F4F8F8] p-4 sm:p-6">
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="contact-name">Name</label>
                <input required id="contact-name" type="text" name="user_name" autoComplete="name" className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="contact-email">Email</label>
                <input required id="contact-email" type="email" name="user_email" autoComplete="email" className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="contact-message">Message</label>
                <textarea required id="contact-message" name="message" rows="5" className="w-full resize-y rounded-lg border border-gray-300 bg-white p-3 text-gray-900" />
              </div>
              <button disabled={isSending} className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-dark-orange px-6 py-3 font-medium text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70">
                {isSending ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
