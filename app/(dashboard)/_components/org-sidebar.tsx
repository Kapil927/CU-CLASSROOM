"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favourites = searchParams.get("favourites");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/">
        <div className="">
          <Image src="/cu.png" alt="Miro Clone Logo" height={1000} width={920} />

        </div>
      </Link>

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />

      <div className="space-y-1 w-full">
        <Button
          variant={favourites ? "ghost" : "secondary"}
          size="lg"
          className="font-normal justify-start px-2 w-full"
          asChild
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Class Boards
          </Link>
        </Button>

        <Button
          variant={favourites ? "secondary" : "ghost"}
          size="lg"
          className="font-normal justify-start px-2 w-full"
          asChild
        >
          <Link
            href={{
              pathname: "/",
              query: { favourites: true },
            }}
          >
            <Star className="h-4 w-4 mr-2" />
            Favourite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};