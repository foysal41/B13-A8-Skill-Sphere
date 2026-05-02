import React from "react";
import coursesDetails from "@/../public/courseDetails.json";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaUsersRays } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { FaCircleCheck } from "react-icons/fa6";
import { MdLibraryAddCheck } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { FaLifeRing } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { PiCertificateLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const CourseDetails = async ({ params }) => {
  const { id } = await params;

  const singleCourse = coursesDetails.find(
    (expectedCourse) => expectedCourse.id == id,
  );

  if (!singleCourse) {
    return <p className="text-center">Course not found</p>;
  }

  return (
    <div className="container mx-auto  p-5">
      <div className="grid   md:grid-cols-12 gap-5 ">
        {/* left side  */}
        <div className="grid-cols-12 md:col-span-8 space-y-4">
          {/* Row:1 - course imag and short description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4   ">
            <div>
              <Image
                src={singleCourse.image}
                height={400}
                width={400}
                alt=""
                className="w-full object-cover rounded-md"
              ></Image>
            </div>

            <div className=" space-y-4">
              <span className="bg-amber-600 px-2 py-1 rounded-md">
                {singleCourse.level}
              </span>
              <h2 className="text-2xl font-bold">{singleCourse.title}</h2>
              <p className="text-black/50">{singleCourse.description}</p>

              <div className="flex items-center gap-2">
                <Image
                  src={singleCourse.instructor.image}
                  height={30}
                  width={30}
                  alt="Course Author Info"
                  className="rounded-full"
                ></Image>
                <h6 className="tex-sm">{singleCourse.instructor.name}</h6>
              </div>

              <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2">
                  <FaStar size={15} className="text-amber-600" />
                  <p className="font-bold">{singleCourse.rating}</p>
                </div>

                <div className="flex items-center gap-2">
                  <FaUsersRays size={15} className="text-amber-600" />
                  <p className="font-bold">{singleCourse.students} Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row: 2 - Course States */}
          <div className=" grid grid-cols-2 md:grid-cols-4 justify-around border-y border-black/10 py-3">
            <div className="flex items-center gap-2">
              <MdOutlineAccessTime size={20} />
              <p className="text-black/60">{singleCourse.duration} Hours</p>
            </div>

            <div className="flex items-center gap-2">
              <GiNetworkBars size={20} />
              <p className="text-black/60">{singleCourse.level} </p>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineGlobal size={20} />
              <p className="text-black/60">{singleCourse.language} </p>
            </div>

            <div className="flex items-center gap-2">
              <SlCalender size={20} />
              <p className="text-black/60">{singleCourse.lastUpdated} </p>
            </div>
          </div>

          {/* Row: 3 - Course About */}
          <div className="space-y-2">
            <h3 className="font-bold text-xl">About This Course</h3>
            <p className="black/30">{singleCourse.about.text}</p>

            {singleCourse.about.points.map((item, idx) => {
              return (
                <div key={idx} className="flex items-center gap-2 ">
                  <FaCircleCheck className="text-primary" />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>

          {/* Row:4 - What you will learn */}
          <div className="space-y-2">
            <h3 className="font-bold text-xl"> What you will learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {singleCourse.whatYouWillLearn.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center bg-[#F5F6FB] gap-3 py-3 px-3"
                  >
                    <MdLibraryAddCheck
                      size={30}
                      className="text-white bg-primary p-1 rounded-md "
                    />
                    <div>
                      <h4 className="text-[15px] font-bold">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="col-md-12 md:col-span-4 space-y-4">
          {/* Row: 1 - price */}
          <div className="border border-black/10 rounded-md p-4  bg-[#FFFEFF]">
            <h3 className="font-bold text-2xl">$49.99</h3>
            <button className="btn btn-primary w-full text-white mt-3">
              Enroll Now
            </button>
            <button className="btn btn-outline w-full text-primary hover:bg-white mt-3">
              <BsCart2 />
              Add to cart
            </button>
            <hr className="text-black/10 my-5" />

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MdOutlineAccessTime size={20} />
                <p className="text-sm">30-Day Money-Back Guarantee</p>
              </div>

              <div className="flex items-center gap-2">
                <FaLifeRing size={20} />
                <p className="text-sm">Full Lifetime Access</p>
              </div>

              <div className="flex items-center gap-2">
                <CiMobile3 size={20} />
                <p className="text-sm">Access on Mobile and TV</p>
              </div>

              <div className="flex items-center gap-2">
                <PiCertificateLight size={20} />
                <p className="text-sm">Certificate of Completion</p>
              </div>
            </div>
          </div>

          {/* Row:2 - Course Curriculum */}
          <div className="border border-black/10 rounded-md p-4  bg-[#FFFEFF]">
            <h3 className="font-bold text-xl">Course Curriculum</h3>
            {singleCourse.curriculum.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="border border-black/10 rounded-md p-3 mb-4"
                >
                  <div className="flex justify-between items-center ">
                    <h4> {item.title} </h4>
                    <div className="flex flex-row gap-1 items-center text-black/40 ">
                      <p>{item.lectures} lectures</p>
                      <span>
                        <GoDotFill />
                      </span>
                      <p>{item.duration}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
