import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import herobg from "../../assets/imgs/herobg.jpg";
import hero1 from "../../assets/imgs/hero1.jpg";
import hero2 from "../../assets/imgs/hero2.jpg";
import choseus from "../../assets/imgs/choseus.png";
import icon7 from "../../assets/imgs/icon7.png";

function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="p-[5%] ">
        <div className="relative w-full ">
          <img
            src={herobg}
            alt="Location"
            className="w-full h-full rounded-lg "
          />

          <div className="absolute top-0 md:flex hidden  lg:right-10 right-2 w-full h-full  items-center justify-end  ">
            <div className="text-text-color font-bold text-center lg:p-10 p-5 bg-gray-50 rounded-lg bg-opacity-100">
              <p className="capitalize">Over 20 Years of Spotless Excellence</p>

              <hr className="my-5 border-t-2 border-dashed border-gray-300" />
              <p className="lg:text-xl text-base coustard-regular">
                "Your Trusted Partner <br /> for Professional Cleaning
                Solutions"
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center lg:flex-row flex-col  gap-10 pt-10">
          <div className="text-text-color lg:w-1/2 w-full">
            <h1 className="text-xl coustard-regular">Welcome Home</h1>
            <p className="text-sm  open-sans pt-2 leading-6">
              With over 20 years of expertise in the commercial cleaning
              industry, WilliamsWay Cleaning Services has built a reputation for
              excellence and reliability. We offer tailored solutions to meet
              the unique needs of various industries, whether it’s daily
              maintenance or specialized cleaning services. Our commitment is to
              create spaces that are not just clean but also healthy and
              welcoming. At WilliamsWay, we prioritize quality, attention to
              detail, and customer satisfaction, making us the trusted partner
              for all your cleaning needs.
            </p>
          </div>
          <div className="lg:w-1/2 w-full text-text-color bg-gray-100 p-5 rounded">
            <h1 className="text-xl coustard-regular">Amenities</h1>
            <p className="text-sm  open-sans pt-2 leading-6">
              Amenities are specially designed for our Customers to enjoy and
              benefit from.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li> Tailored solutions to suit your unique requirements.</li>
              <li>Eco-Friendly Products</li>
              <li>Flexible Scheduling </li>
              <li>Highly Trained Staff</li>
              <li>Comprehensive Services</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>
        <hr className="md:my-14 my-5 border-t-2 border-dotted border-gray-300" />

        <div className="flex gap-10 items-start py-10 lg:flex-row flex-col">
          <div className="w-full">
            {/* home */}

            <div className="text-text-color  flex items-center justify-center md:gap-10 gap-5 lg:flex-row flex-col-reverse">
              <div className="lg:w-[50%] w-full bg-white p-3 shadow-lg border border-gray-200 rounded ">
                <img
                  src={hero2}
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="lg:w-[50%] w-full">
                <h1 className="text-xl coustard-regular">Our Mission</h1>
                <p className="text-sm  open-sans pt-2 leading-6">
                  At WilliamsWay Cleaning Services, our mission goes beyond just
                  cleaning; it’s about enhancing every space we touch to promote
                  a healthier, more productive environment. We are committed to
                  delivering exceptional cleaning services that are not only
                  reliable and of the highest quality but also sustainable,
                  ensuring a positive impact on both your space and the planet.
                  Our team believes that a clean and well-maintained space lays
                  the foundation for success, well-being, and overall comfort.
                  By prioritizing attention to detail, customer satisfaction,
                  and eco-friendly practices, we aim to create environments
                  where people can thrive—whether at work, home, or in any other
                  setting.
                </p>
              </div>
            </div>

            <hr className="md:my-14 my-5 border-t-2 border-dotted border-gray-300" />
            <div className="text-text-color  flex items-center justify-center md:gap-10 gap-5 lg:flex-row flex-col-reverse">
              <div className="lg:w-[50%] w-full bg-white p-3 shadow-lg border border-gray-200 rounded ">
                <img
                  src={hero1}
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="lg:w-[50%] w-full">
                <h1 className="text-xl coustard-regular">Our Team </h1>
                <p className="text-sm  open-sans pt-2 leading-6">
                  At WilliamsWay Cleaning Services, our team is made up of
                  highly skilled professionals with years of experience and a
                  deep commitment to delivering exceptional cleaning solutions.
                  We take great pride in our attention to detail and our
                  dedication to upholding the highest standards of integrity in
                  everything we do. Our team is passionate about tailoring our
                  services to meet the unique needs of each client, ensuring
                  personalized solutions that create clean, safe, and welcoming
                  environments. With a focus on collaboration and excellence, we
                  work together to exceed expectations, fostering long-term
                  relationships built on trust and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" 2xl:py-[147px] py-[8%] flex justify-center  2xl:gap-[147px] xl:gap-[100px] gap-8 lg:flex-row flex-col items-center">
          
          <div className="lg:w-[50%] w-full">
            <div className="">
              <h1 className="2xl:text-[66px] xl:text-5xl md:text-3xl text-2xl 2xl:leading-[82px] leading-7 text-[#060924] coustard-regular">
                Services We Excel In, Across Every Surface
              </h1>

              <p className="text-[#7D8C95] 2xl:text-xl md:text-base  text-sm  open-sans 2xl:leading-10 md:leading-7 leading-6 2xl:pt-5 pt-3">
                From pristine floors to spotless surfaces, we offer a wide range
                of expert cleaning services tailored to meet the needs of any
                space. Whether it’s daily maintenance or specialized care, our
                team ensures top-quality results for every service we provide.
              </p>

              <div className="2xl:pt-10 md:pt-5 pt-3">
                <h2 className="coustard-regular 2xl:text-[32px] text-lg text-[#060924] lg:text-start text-center">
                  Why choose WilliamsWay?
                </h2>
                <div className="space-y-5 xl:pt-8 pt-4">
                  <div className="rounded-[20px] bg-[#FAFAFA] 2xl:p-5 p-3">
                    <div className="flex gap-2 items-start">
                      <img src={icon7} alt="" />
                      <h1 className=" open-sans 2xl:text-lg text-sm text-[#7D8C95]">
                        <span className="text-[#15238C]">
                        20 Years of Experience- &nbsp;
                        </span>
                        We’ve honed our expertise to deliver the highest standards 
                        in commercial cleaning.
                      </h1>
                    </div>
                  </div>
                  <div className="rounded-[20px] bg-[#FAFAFA] 2xl:p-5 p-3">
                    <div className="flex gap-2 items-start">
                      <img src={icon7} alt="" />
                      <h1 className=" open-sans 2xl:text-lg text-sm text-[#7D8C95]">
                        <span className="text-[#15238C]">
                        Experienced Professionals-  
                        </span>{" "}
                        Our team is highly trained and dedicated to exceptional results. 
                      </h1>
                    </div>
                  </div>
                  <div className="rounded-[20px] bg-[#FAFAFA] 2xl:p-5 p-3">
                    <div className="flex gap-2 items-start">
                      <img src={icon7} alt="" />
                      <h1 className=" open-sans 2xl:text-lg text-sm text-[#7D8C95]">
                        <span className="text-[#15238C]">Tailored Solutions- </span> We understand that no two spaces are alike, so we customize our 
                        services to meet your needs.
                      </h1>
                    </div>
                  </div>
                  <div className="rounded-[20px] bg-[#FAFAFA] 2xl:p-5 p-3">
                    <div className="flex gap-2 items-start">
                      <img src={icon7} alt="" />
                      <h1 className=" open-sans 2xl:text-lg text-sm text-[#7D8C95]">
                        <span className="text-[#15238C]">Eco-Friendly Practices- </span> We use environmentally safe products and techniques to protect 
                        your space and the planet
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full">
            <img src={choseus} alt="" className="w-full" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
