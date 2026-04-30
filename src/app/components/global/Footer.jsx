import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#1C2939] py-8 px-4 space-y-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Footer Item one */}
        <div className="text-white space-y-3   border-[#33404E] md:border-r  px-5">
          <a className=" flex items-center gap-2  text-xl">
            <MdCastForEducation className="text-[#5B5AEF] h-10 w-10" />
            Skill Sphere
          </a>
          <p>
            Your trusted learning partner to upgrade skills and achieve your
            dreams.
          </p>
          {/* Social icon list */}
          <div className="flex gap-2 items-center text-white">
            <FaFacebookF className="" />
            <FaTwitter />
            <TiSocialLinkedin />
            <FaInstagram />
          </div>
        </div>

        {/* Footer Item Two */}
        <div className="text-white space-y-3 px-5 text-[16px]">
          <h3>Contact Us</h3>
          <p className="flex items-center gap-2">
            <IoLocation size={15} />
            123 Learning Lane, Education City, 10001
          </p>

          <p className="flex items-center gap-2">
            <FaEnvelopeOpenText size={15} />
            support@skillsphere.com
          </p>

          <p className="flex items-center gap-2">
            <FaPhone size={15} />
            +880 1234-567890
          </p>
        </div>

        {/* Footer Item Three */}
        <div className="text-white space-y-3 px-5 text-[16px]">
          <h3>Quick Link </h3>
          <div className="flex flex-col">
            <a href="" className="">
              Home
            </a>
            <a href="" className="">
              Courses
            </a>
            <a href="" className="">
              MyProfile
            </a>
          </div>
        </div>

        {/* Footer Item Four */}
        <div className="text-white space-y-3 px-5 text-[16px]">
          <h3>NewsLetter </h3>
          <p>Subscribe to get updates and new course alerts.</p>
          <form action="" className="flex items-center">
            <input
              className="bg-white rounded-l-md outline-none text-black p-2 "
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="bg-[#4F47FC] h-10 p-4 rounded-r-md flex items-center  ">
              <IoIosSend />
            </button>
          </form>
        </div>
      </div>

      <hr className="text-[#344150]" />
      <p className="text-center text-white text-[12px] ">
        © 2026 SkillSphere. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
