import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import courses from "@/../public/courses.json";

const TopInstructors = () => {
  return (
    <div className="container mx-auto  p-5">
      <div>
        {/* header */}
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-bold ">Top Instructors</h2>
          <a href="">View All</a>
        </div>

        {/* All Instructors */}
        <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.slice(0, 4).map((course, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 border-md shadow px-5 py-5 rounded-md"
            >
              <Image
                src={course.instructor.image}
                height={80}
                width={80}
                alt="image"
                className="rounded-full"
              ></Image>
              <div>
                <h3 className="font-bold">{course.title}</h3>
                <p>{course.category}</p>
                <div className="flex items-center gap-2">
                  <FaStar size={15} className="text-amber-600" />
                  <p className="font-bold">{course.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
