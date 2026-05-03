"use client";
import Link from "next/link";
import React, { useState } from "react";
import { authClient } from "../lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleRegisterFunc = async (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData.entries());
    setLoading(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      callbackURL: "/login",
    });

    if (error) {
      toast.error("You have have already have account please login");
      setLoading(false);
    }
    if (data) {
      toast.success("Register Successful");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto p-5 justify-center items-center">
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">Register form</h2>
        <form onSubmit={handleRegisterFunc} className="space-y-3">
          <div>
            <label className="block"> Full Name </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="w-full border rounded-md p-2 focus:outline-none  focus:ring-2 focus:ring-indigo-500 "
            />
          </div>

          <div>
            <label className="block"> Email </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full border rounded-md p-2 focus:outline-none  focus:ring-2 focus:ring-indigo-500 "
            />
          </div>

          <div>
            <label className="block"> Password </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your password"
              className="w-full border rounded-md p-2 focus:outline-none  focus:ring-2 focus:ring-indigo-500 "
            />
          </div>
          {}
          <button className="btn">
            {loading ? (
              <div>
                {" "}
                <>
                  {/* ✅ react spinner */}
                  <ClipLoader size={18} color="#ffffff" />
                  Registering...
                </>
              </div>
            ) : (
              "Register"
            )}
          </button>
        </form>
        <p>
          login your account <Link href={"/login"}>Click here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
