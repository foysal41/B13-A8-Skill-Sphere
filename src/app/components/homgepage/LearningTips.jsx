import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const LearningTips = () => {
  return (
    <div className="container mx-auto  p-5">
      <div className="">
        {/* Row:1 -  header */}
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-bold ">Learning Tips</h2>
        </div>

        {/* Row:2 - cards */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-[#EBE9FD] flex items-center gap-4 rounded-md p-6">
            <IoTimeOutline
              size={100}
              className="text-purple-500 text-4xl bg-[#EBE9FD]"
            />
            <div>
              <h3 className="text-xl font-bold">Manage Your Time</h3>
              <p>
                Create a study schedule and stick to it. Consistency is the key
                to success.
              </p>
            </div>
          </div>

          <div className="bg-[#E5FDF1] flex items-center gap-4 rounded-md p-6">
            <FiTarget
              size={100}
              className="text-purple-500 text-4xl bg-[#E5FDF1]"
            />
            <div>
              <h3 className="text-xl font-bold">Practice Daily</h3>
              <p>Spend at least 1–2 hours daily practicing what you learn.</p>
            </div>
          </div>

          <div className="bg-[#FDF8E4] flex items-center gap-4 rounded-md p-6">
            <FaCode
              size={100}
              className="text-purple-500 text-4xl bg-[#FDF8E4]"
            />
            <div>
              <h3 className="text-xl font-bold">Build Real Projects</h3>
              <p>Apply your knowledge by building real-world projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningTips;
