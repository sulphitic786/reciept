import { FaLocationDot } from "react-icons/fa6";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    postCode: "",
    phone: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);

    setFormData({
      name: "",
      age: "",
      email: "",
      postCode: "",
      phone: "",
      photo: null, // Resetting the photo field as well
    });

    document.querySelector('input[type="file"]').value = "";
  };

  return (
    <>
      <Navbar />
      <section className=" p-[5%] ">
        <div className=" w-full text-center flex items-center justify-center  flex-col ">
          <h3 className="text-black 2xl:text-[80px] xl:text-[70px] lg:text-6xl md:text-5xl text-3xl inter font-black capitalize coustard-regular">
            Contact
          </h3>
          <p className=" 2xl:pt-[56px] xl:pt-12 lg:pt-9 pt-5 inter font-normal 2xl:text-xl  lg:text-lg text-sm text-text-color leading-6 open-sans">
            If you're ready to experience top-tier cleaning services or have any
            questions about how we can transform your space, don’t hesitate to
            reach out. Contact us today, and let our team of experts provide you
            with the personalized solutions you need for a cleaner, healthier
            environment.
          </p>
          <h3 className="font-black inter md:text-xl text-lg pt-10 open-sans open-sans">
            For booking inquiries, please contact us :
          </h3>
          <div className="flex items-start justify-start flex-col">
            <div className="flex  lg:gap-8 gap-4 lg:pt-10 pt-5 md:flex-row flex-col">
              <p className="flex items-center  gap-2 inter font-normal lg:text-xl text-sm  coustard-regular">
                <FaPhone className="md:text-3xl text-xl text-[#15238C] " />
                (248) 904-9553
              </p>
              <p className="flex items-center  gap-2 inter font-normal lg:text-xl text-sm coustard-regular">
                <MdOutlineEmail className="md:text-3xl text-xl text-[#15238C] " />
                info@WWCS.com
              </p>
            </div>

            <div className="flex  md:gap-8 gap-4 lg:pt-10 pt-4 md:flex-row flex-col">
              <p className="flex items-center  gap-2 inter font-normal lg:text-xl text-sm  coustard-regular capitalize">
                <FaLocationDot className="md:text-3xl text-xl text-[#15238C] " />
                Serving the Greater Detroit Area
              </p>
            </div>

            {/* <div className="flex  lg:gap-8 gap-4 lg:pt-10 pt-4 md:flex-row flex-col">
              <a href="" className="flex items-center  gap-2 inter font-normal lg:text-xl text-sm coustard-regular">
                <FaSquareInstagram className="md:text-3xl text-xl text-[#15238C]  " />
                Instagram
              </a>
              <a href="" className="flex items-center  gap-2 inter font-normal lg:text-xl text-sm coustard-regular">
                <FaSquareFacebook className="md:text-3xl text-xl text-[#15238C] " />
                Facebook
              </a>

              <a href="" className="flex items-center gap-2 inter font-normal lg:text-xl text-sm coustard-regular">
                <FaSquareWhatsapp className="md:text-3xl text-xl text-[#15238C] " />
                Whatsapp
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
