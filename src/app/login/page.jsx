"use client";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";
import { FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  const router = useRouter();
  const handleLoginFunc = async (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData.entries());

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      callbackURL: "/courses",
    });

    console.log(data, error);
    if (error) {
      toast.error("Your login info is wrong");
    }

    if (data) {
      toast.success("Register Successful");
      setTimeout(() => {
        router.push("/courses");
      }, 1500);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    
  };
  return (
    <div className="container mx-auto p-5 justify-center items-center">
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">Login form</h2>
        <form onSubmit={handleLoginFunc} className="space-y-3">
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
          <button className="btn">Login</button>
        </form>
        <p>
          login your account <Link href={"/register"}>Click here</Link>
        </p>

        <button
          onClick={handleGoogleSignIn}
          className=" border border-red-500 px-4 py-2 flex gap-2 items-center cursor-pointer"
        >
          <FaGoogle />
          <p>Login with google</p>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
