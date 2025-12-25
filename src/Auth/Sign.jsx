import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async (e) => {
    e.preventDefault(e);
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message, {
        autoClose: 1000,
      });
    } else {
      toast.success("Please check your email for verification.", {
        autoClose: 1500,
      });
    }
  };

  return (
    <form
      onSubmit={signUp}
      className="max-w-md mx-auto mt-16 p-8 bg-gray-800 shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-white" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium text-white" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 disabled:bg-blue-400"
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>

      <p className="text-center text-gray-500 mt-6">
        Already have an account?{" "}
        <Link to={"/login"} className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}

export default SignUp;
