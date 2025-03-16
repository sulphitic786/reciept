import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import icon1 from "../../assets/imgs/icon1.png";
import icon2 from "../../assets/imgs/icon2.png";
import icon3 from "../../assets/imgs/icon3.png";
import icon4 from "../../assets/imgs/icon4.png";
import icon5 from "../../assets/imgs/icon5.png";
import icon6 from "../../assets/imgs/icon6.png";
import icon8 from "../../assets/imgs/icon8.png";
import icon9 from "../../assets/imgs/icon9.png";
import icon10 from "../../assets/imgs/icon10.png";
import services1 from "../../assets/imgs/services1.png";

function AmenitiesPage() {
  const services = [
    {
      title: "Construction Site",
      description: "Comprehensive Cleaning for Your Project",
      image: icon2,
    },
    {
      title: "Home Town",
      description: "Relax While We Clean your home",
      image: icon1,
    },
    {
      title: "Floor Care",
      description: "Protect and Maintain Your Floors",
      image: icon3,
    },
    {
      title: "Cleaning as a Perk",
      description: "A Unique Perk for Your Employees",
      image: icon4,
    },
    {
      title: "Company town",
      description: "Professional Cleaning for Your Business",
      image: icon5,
    },
    {
      title: "Window Cleaning",
      description: "See Clearly with Sparkling Windows",
      image: icon6,
    },
    {
      title: "Auto Dealerships",
      description: "Maintain a showroom shine to impress your customers",
      image: icon8,
    },
    {
      title: "Educational service",
      description: "Ensure a clean and healthy learning environment.",
      image: icon9,
    },
    {
      title: "Fitness Centers",
      description: "Fresh and sanitized gym  for your members",
      image: icon10,
    },
  ];
  return (
    <div>
      <Navbar />
      <section className="p-[5%] ">
        <div className="py-10">
          <div className="flex items-center justify-center flex-col text-center">
            <h1 className="trenda_regular md:text-5xl text-2xl text-[#060924] md:leading-[66px] leading-6">
              Custom Cleaning for Every Corner
            </h1>
            <p className="pt-6 text-[#7D8C95] md:text-base text-sm leading-7 sofia_regular">
              Experience unmatched cleanliness and care with our comprehensive
              services, ensuring your home and{" "}
              <br className="lg:block hidden" />
              workplace shine with professionalism and efficiency.
            </p>
          </div>
          <div className="grid 2xl:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 grid-cols-1 pt-[60px] md:gap-[30px] gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#F0F5F7] rounded-[30px] lg:p-[30px] p-4"
              >
                <div className="flex md:gap-7 gap-2 items-center">
                  <img src={service.image} alt="" className="w-20 h-20" />
                  <div>
                    <p className="text-[#060924] trenda_bold lg:text-2xl md:text-lg text-base">
                      {service.title}
                    </p>
                    <p className="text-[#7D8C95] lg:text-base text-sm leading-4 sofia_regular">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="2xl:px-[100px] px-[5%] 2xl:py-[147px] rounded-3xl md:py-[80px] py-[15%] bg-[#060924] flex justify-between items-center 2xl:gap-[150px] md:gap-12 gap-5 lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full">
            <img src={services1} alt="" className="rounded-[30px] w-full h-full" />
          </div>
          <div className="lg:w-1/2 w-full lg:text-start text-center">
            <h1 className="2xl:text-[32px] md:text-2xl text-base 2xl:leading-[66px] md:leading-9 leading-7 text-[#FAFAFA] trenda_regular">
            Transforming Spaces with Tailored Services
            </h1>
            <p className="text-[#7D8C95] 2xl:text-xl md:text-sm text-sm open-sans 2xl:leading-10 xl:leading-8 leading-6 lg:pt-5 pt-1">
            Discover a wide range of professional cleaning services designed to meet the unique needs of every space. From routine maintenance to specialized cleaning solutions, we pride ourselves on delivering exceptional quality and attention to detail. Our team is dedicated to transforming your environment into a clean, safe, and welcoming space, ensuring the highest standards of cleanliness and customer satisfaction. Whatever your cleaning needs, WilliamsWay Cleaning Services is here to provide reliable, tailored solutions that exceed expectations.
           <br />
            At WilliamsWay Cleaning Services, we specialize in providing comprehensive cleaning solutions for every type of space. Whether it’s a residential home, a bustling office, or a large commercial facility, our tailored services are designed to address your specific needs.
           <br />
            With a focus on quality, reliability, and meticulous attention to detail, we ensure that every environment we touch is transformed into a clean, healthy, and inviting space. Let us take care of the cleaning, so you can focus on what matters most.
           </p>
         
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default AmenitiesPage;
