import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg(
        "Account created successfully. Please check your email for verification."
      );
    }

    setLoading(false);
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
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 disabled:bg-blue-400"
      >
        {loading ? "Creating account..." : "Sign Up"}
      </button>

      {errorMsg && (
        <p className="text-red-600 mt-4 text-center font-medium">{errorMsg}</p>
      )}
      {successMsg && (
        <p className="text-green-600 mt-4 text-center font-medium">
          {successMsg}
        </p>
      )}

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
