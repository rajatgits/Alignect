import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-5 w-full">
      <Link href="/" className=" space-x-1 flex items-center justify-center">
        <Image src="/logo.svg" alt="Logo" width={90} height={45} />
        <p className="text-2xl font-bold">Alignify</p>
      </Link>
      <DottedSeparator className="my-5" />
      <Navigation />
    </aside>
  );
};
