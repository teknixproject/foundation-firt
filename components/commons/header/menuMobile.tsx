"use client";

import React from "react";
import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { components } from "./const";
import { usePrefetchLinks } from "@/hooks/usePrefetchLinks";

const MenuMobile = ({ className }: { className: string }) => {
  const router = useRouter();
  // const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((open) => !open);

  const nextPage = (href: string) => {
    setOpen(false); // Đóng menu nhanh hơn
    router.push(href); // Điều hướng
  };

  usePrefetchLinks(components);

  return (
    <div className={`max-lg:block hidden ${className}`}>
      <div
        className={cn(
          "fixed w-0 h-dvh z-50 right-0 top-0 bg-black/50 duration-300 flex justify-end invisible opacity-0 overflow-hidden backdrop-blur-[5px]",
          open && "w-full visible opacity-100"
        )}
        onClick={toggleOpen}
      >
        <div
          className="w-[80%] h-full text-white rounded-lg shadow-lg  backdrop-blur-[16px] p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            onClick={toggleOpen}
            className="flex justify-start cursor-pointer"
          >
            <Image
              alt="logo"
              src="/assets/svgs/close-pane.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            {_.map(components, (comp) => (
              <Link
                key={comp.href}
                href={comp.href}
                onClick={() => nextPage(components[0].href)}
                className="text-white"
                prefetch={true}
              >
                {comp.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div onClick={toggleOpen}>
        <Image
          alt="logo"
          src="/assets/icons/menu_bar.svg"
          width={40}
          height={40}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MenuMobile;
