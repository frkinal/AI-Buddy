import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
