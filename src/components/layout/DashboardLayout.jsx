import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="flex h-screen bg-black text-white">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-6 bg-black overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
