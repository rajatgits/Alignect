import { UserButton } from "@/features/auth/components/user-button";
import Image from "next/image";
import Link from "next/link";

interface StandaloneLayoutProps {
  children: React.ReactNode;
}

const StandaloneLayout = ({ children }: StandaloneLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-autp max-w-screen-2xl p-5">
        <nav className="flex justify-between items-center h-[73px]">
          <Link href="/" className="flex items-center justify-center space-x-2">
            <Image src="/logo.png" alt="Logo" height={45} width={45} />
            <p className="text-3xl font-bold">Alignect</p>
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-5">
          {children}
        </div>
      </div>
    </main>
  );
};

export default StandaloneLayout;
