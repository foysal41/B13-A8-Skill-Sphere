import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/student_image.webp";
import { PiStudent } from "react-icons/pi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container mx-auto  p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        {/* left side */}
        <div className="space-y-6 text-center md:text-left ">
          <p className="bg-[#E8E7FE]  inline-block  px-4 py-1 rounded-full text-[#4335D5]">
            Learn . Grow . Succeed
          </p>
          <h1 className=" text-5xl ">
            Upgrade Your Skills Shape Your{" "}
            <span className="text-[#4335D5]">Future</span>{" "}
          </h1>
          <p className="  font-bold md:w-100">
            Explore 1000+ online courses from industry experts and advance your
            career.{" "}
          </p>

          {/* Duel button */}
          <div className="flex flex-row justify-center md:justify-start gap-4">
            <Link href="/courses">
              <button className="btn btn-primary">Explore Courses</button>{" "}
            </Link>
            <button className="btn btn-outline btn-primary">Contact Us</button>
          </div>
          {/* states */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            <div className="flex items-center">
              <PiStudent size={30} className="text-[#4335D5]" />
              <div>
                <p className="text-xl font-bold">10K+</p>
                <p className="text-sm">Students</p>
              </div>
            </div>

            <div className="flex items-center">
              <PiStudent size={30} className="text-[#4335D5]" />
              <div>
                <p className="text-xl font-bold">500+</p>

                <p className="text-sm">Cources</p>
              </div>
            </div>

            <div className="flex items-center">
              <PiStudent size={30} className="text-[#4335D5]" />
              <div>
                <p className="text-xl font-bold">50+</p>
                <p className="text-sm">Instructors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <Image src={HeroImage} alt="student" width={800} height={800} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
