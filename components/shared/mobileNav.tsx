"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          height={28}
          width={180}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="Menu"
                height={32}
                width={32}
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm-w-64">
              <>
                <Image
                  src="assets/images/logo-text.svg"
                  alt="creatify"
                  width={152}
                  height={23}
                />
                <ul className="header-nav_elements">
                  {navLinks.slice(0, 6).map((link) => {
                    const isActive = link.route === pathName;

                    return (
                      <li
                        key={link.label}
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-gray-700`}
                      >
                        <Link className="sidebar-link" href={link.route}>
                          <Image
                            src={link.icon}
                            alt={link.label}
                            height={24}
                            width={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Log In</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
