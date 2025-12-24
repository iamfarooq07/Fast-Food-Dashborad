import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="h-16 w-full px-6 flex items-center justify-between bg-black border-b border-white/10">
      <h1 className="text-lg font-semibold text-white">Fast Food</h1>

      <div className="flex items-center gap-4">
        <Input
          placeholder="Search..."
          className="w-64 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400"
        />

        <Avatar>
          <AvatarFallback className="bg-zinc-800 text-white">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShN0nuLT7HIpIANuDi6wbMKpeuCgZsl2PtAA&s"
              alt="Admin Logo"
            />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
