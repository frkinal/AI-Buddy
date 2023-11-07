"use client";

import { Montserrat } from "next/font/google";

import Image from "next/image";

import Link from "next/link";

import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const fonts = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn, signOut } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative w-8 h-8 mr-4">
          <Image fill src="/logo.svg" alt="AI Buddy Logo" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", fonts.className)}>
          AI Buddy
        </h1>
      </Link>

      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dahsboard" : "sign-up"}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </nav>
  );
};
