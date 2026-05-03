"use client";

import { authClient } from "@/app/lib/auth-client";
import { toast } from "react-toastify";

const myProfilePage = () => {
  const handleProfileData = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const { data, error } = await authClient.updateUser({
      name,
    });

    if (error) {
      toast.error("Update failed");
    }

    if (data) {
      toast.success("Profile updated");
    }
  };

  return (
    <div className="container mx-auto  flex justify-center p-5">
      <div className="w-full max-w-md  p-6 bg-white shadow-lg rounded-xl space-y-5">
        <h2 className="text-2xl font-bold text-center">My Profile</h2>

        <form onSubmit={handleProfileData} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Update Your Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="btn btn-primary w-full">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default myProfilePage;
