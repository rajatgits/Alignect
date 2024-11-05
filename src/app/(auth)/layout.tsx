"use client";

import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className=" w-screen bg-[#9fe8a9] h-screen flex flex-col items-center justify-center">
      <nav className="flex justify-between items-center space-x-2">
        <Image src="/logo.png" alt="Logo" height={28} width={50} />
        <p className="text-3xl">Alignify</p>
      </nav>
      <div className="flex items-center justify-center ">
        <div className="p-9">{children}</div>
      </div>
    </main>
  );
};

export default AuthLayout;
