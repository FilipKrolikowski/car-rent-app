import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 mt-2">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.png" alt="logo" width={118} height={18} className="object-contain" />
        </Link>
        <div className="flex gap-6">
          <div className="font-bold text-sm flex gap-2 items-center cursor-pointer border-b-2 border-transparent hover:border-white ease-in transition-all">
            <FaUser /> <span>Manage bookings</span>
          </div>
          <div className="font-bold text-sm flex gap-2 items-center cursor-pointer border-b-2 border-transparent hover:border-white ease-in transition-all">
            <FaUser /> <span>Log In</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
