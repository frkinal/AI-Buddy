import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div className="flex w-full justify-start">
        <UserButton afterSignOutUrl="/" />
      </div>
      <MobileSidebar />
    </div>
  );
};
export default Navbar;
