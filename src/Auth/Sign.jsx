import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/ui/magic-card";

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
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm border-none p-0 shadow-none">
        <MagicCard className="p-4 bg-gray-800">
          <CardHeader className="border-b p-4 text-center text-3xl font-bold">
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>

          <form onSubmit={signUp}>
            <CardContent className="p-4 space-y-4">
              <div>
                <Label className="mb-2 text-lg">Email</Label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label className="mb-2 text-lg">Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>

            <CardFooter className="border-t p-4">
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </CardFooter>
          </form>
          <p className="text-center text-gray-500 mt-2">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </MagicCard>
      </Card>
    </div>
  );
}

export default SignUp;
