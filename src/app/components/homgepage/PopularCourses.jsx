import React from "react";
import courses from "@/../public/courses.json";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { GrSteps } from "react-icons/gr";
import Link from "next/link";

const PopularCourses = () => {
  return (
    <div className="container mx-auto  p-5">
      <div className=" ">
        {/* header */}
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-bold ">Popular Courses</h2>
          <a href="">View All</a>
        </div>

        {/* courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6 items-center gap-4 relative">
          {/* Course item one */}
          {courses
            .filter((course) => course.rating > 4.7)
            .slice(0, 3)
            .map((course, idx) => (
              <div className="relative" key={idx}>
                <Image
                  src={course.image}
                  height={300}
                  width={300}
                  alt={course.title}
                  className="rounded-t-md w-full h-48 object-cover"
                ></Image>
                <span className="bg-amber-400 text-black rounded px-2 py-1  text-sm absolute top-3 right-2">
                  {course.level}
                </span>

                {/* Row: 1 Course Info */}
                <div className="px-3 py-5  bg-white rounded-b-md shadow">
                  <h3 className="font-bold ">{course.title}</h3>

                  {/* Row:2 Author Info */}
                  <div className="flex items-center py-2  justify-between ">
                    {/* Author left */}
                    <div className="flex  items-center gap-2 justify-between w-full">
                      <div className="flex items-center gap-2">
                        <Image
                          src={course.instructor.image}
                          height={25}
                          width={25}
                          alt="Course Author Info"
                          className="rounded-full"
                        ></Image>
                        <h6 className="tex-sm">{course.instructor.name}</h6>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaStar size={15} className="text-amber-600" />
                        <p className="font-bold">{course.rating}</p>
                      </div>
                    </div>

                    {/* Author Right */}
                    <div></div>
                  </div>

                  {/* Row:3 Course Duration  */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <IoMdTime />
                      <p>{course.duration}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <GrSteps />
                      <p>{course.level}</p>
                    </div>
                  </div>

                  {/* Row:4 Course CTA */}
                  <Link href={`/courses/${course.id}`} className="mt-4 block ">
                    <button className="btn btn-outline btn-primary w-full text-primary hover:text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
