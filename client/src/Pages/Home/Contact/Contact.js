import React, {useRef, useEffect} from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaEnvelope, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_673apfd",
        "template_uone7ka",
        form.current,
        "BhjUssxBPE-QbzaMw"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent");
          form.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="px-6 md:px-20 lg:px-40 md:py-12 my-20" id="contact">
      <div className="text-center" data-aos="fade-up">
        <h6 className="capitalize text-xs">Connect with me</h6>
        <h3 className="text-3xl text-[#58E3C4] font-bold mt-3 capitalize">
          Contact
        </h3>
      </div>

      <div className="flex justify-center flex-col md:flex-row gap-12 mt-12 overflow-hidden">
        <div className="md:basis-1/4"  data-aos="fade-right">
          <div className="border border-[#58E3C4] transition-white-200 ease-linear cursor-pointer py-8 px-8 rounded-xl flex flex-col items-center justify-center">
            <span className="text-2xl mb-4"><FaFacebookMessenger/></span>
            <p className-="text-lg">Messenger</p>
            <h4 className="mb-3 text-md">Salahddin Khan Shohan</h4>
            <a className="text-sm" href="https://m.me/ShohanKhanDBZ" target="_blank" rel="noreferrer">Send A Message</a>
          </div>

          <div className="border border-[#58E3C4] transition-white-200 ease-linear cursor-pointer py-8 px-8 rounded-xl flex flex-col items-center justify-center my-6">
            <span className="text-2xl mb-4"><FaEnvelope/></span>
            <p className-="text-lg">Email</p>
            <h4 className="mb-3 text-md">shohankhan@gmail.com</h4>
            <a href="mailto:shohankhan@gmail.com" target="_blank" rel="noreferrer" className="text-sm ">Send A Message</a>
          </div>

          <div className="border border-[#58E3C4] transition-white-200 ease-linear cursor-pointer py-8 px-8 rounded-xl flex flex-col items-center justify-center">
            <span className="text-2xl mb-4"><FaWhatsapp/></span>
            <p className-="text-lg">Whatsapp</p>
            <h4 className="mb-3 text-md">+8801710881414</h4>
            <a href="https://api.whatsapp.com/send?phone++01710881414" target="_blank" rel="noreferrer" className="text-sm">Send A Message</a>
          </div>

        </div>

        <div className="md:basis-2/4" data-aos="fade-left">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="bg-transparent border border-[#58E3C4] 
            rounded w-full p-3" placeholder="Name"/>
            <input type="email" name="user_email" className="bg-transparent border border-[#58E3C4]
            rounded w-full p-3 my-6" placeholder="Email"/>
            <textarea placeholder="Subject" name="message" cols="30" rows="10" 
            className="bg-transparent border border-[#58E3C4] rounded w-full p-3"></textarea>
            <input type="submit" value="Send Message"   className="bg-[#58E3C4] hover:bg-transparent hover:border text-black hover:text-white transition-all 
              duration-300 ease-linear py-2 px-6 rounded mt-3"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
