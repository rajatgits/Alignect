import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { Projects } from "./projects";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-5 w-full">
      <Link href="/" className=" space-x-2 flex items-center justify-center">
        <Image src="/logo.png" alt="Logo" width={45} height={45} />
        <p className="text-3xl font-bold">Alignify</p>
      </Link>
      <DottedSeparator className="my-5" />
      <WorkspaceSwitcher />
      <DottedSeparator className="my-5" />
      <Navigation />
      <DottedSeparator className="my-5" />
      <Projects />
    </aside>
  );
};
