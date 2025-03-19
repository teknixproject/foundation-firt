'use client';
import Container from '@/components/container';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function FooterMobile() {
  const socials: { title: string; href: string; icon: string }[] = [
    {
      title: 'Home',
      href: '#fb',
      icon: '/assets/icons/fb.svg',
    },
    {
      title: 'About',
      href: '#instagram',
      icon: '/assets/icons/instagram.svg',
    },
    {
      title: 'Mining',
      href: '#x',
      icon: '/assets/icons/x.svg',
    },
    {
      title: 'Community',
      href: '#ytb',
      icon: '/assets/icons/ytb.svg',
    },
  ];

  return (
    <footer className="bg-white relative overflow-hidden">
      <Container className="main:!px-[70px] py-16">
        <div className="w-full flex items-center justify-between max-lg:flex-col max-lg:gap-y-10">
          <div className="">
            <Image width={73} height={32} src="/assets/images/LogoTBK.png" alt="Logo" />
          </div>
          <div className="w-[343px] h-[69px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-center text-stone-950 text-base font-medium font-['Poppins'] leading-tight">
              Let’s Get In Touch!
            </div>
            <div className="self-stretch text-center text-[#6d6d6d] text-[13px] font-normal font-['Poppins'] leading-tight">
              What' s inside?
              <br />
              Exclusive sales, new arrivals & much more.
            </div>
          </div>
          <div className="w-[800px] max-lg:w-full px-8 max-lg:px-0 border-x border-[#E7E5E4] max-lg:border-0 flex flex-col justify-center gap-16">
            <div className="flex justify-between">
              <div className="h-5 justify-between items-start flex flex-col">
                <div className="text-stone-950 text-[13px] font-medium font-['Poppins'] leading-tight">
                  Contact Us
                </div>
                <div className="text-center text-black text-[13px] font-normal font-['Poppins'] underline leading-tight">
                  Terms & Conditions
                </div>
              </div>
              <div className="h-5 justify-between items-start flex flex-col">
                <div className="text-stone-950 text-[13px] font-semibold font-['Poppins'] leading-tight">
                  contact@coincapmarket.teknixcorp
                </div>
                <div className="text-center text-black text-[13px] font-normal font-['Poppins'] underline leading-tight">
                  Privacy Policy
                </div>
              </div>
            </div>
            <div className="w-[450px] border border-[#E7E5E4] max-lg:border-0 rounded-full relative max-lg:w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="text-base leading-[150%] text-descriptionB1 outline-none w-full bg-transparent pl-6 py-4 border border-[#B1B1B1] rounded-[100px]"
              />
              <div className="absolute top-1/2 -translate-y-1/2 right-0">
                <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
                  <span className="z-10 pr-8 group-hover:text-black">Sign Up</span>
                  <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-white transition-[width] group-hover:w-[calc(100%-8px)]">
                    <div className="mr-3.5 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14 8L18 12M18 12L14 16M18 12L6 12"
                          stroke="#0C0A09"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-base font-medium leading-[150%] text-typo1">Social Media</p>
            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <Link href={social.href} key={social.title}>
                  <Image width={24} height={24} src={social.icon} alt={social.title} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
      {/* <Container className="main:!px-[70px] py-2 z-10">
        <div className="flex items-center justify-center">
          <p className="text-paragraph2 text-description6D text-center">
            Copyright © 2025 Ton Foundation, All Rights Reserved.
          </p>
        </div>
      </Container> */}
      <div className="absolute bottom-0 w-[calc(100%-70px)] max-w-[1300px] left-1/2 -translate-x-1/2 translate-y-1/3 z-[5]">
        {/* <svg
          className="custom-font"
          width="100%"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0"
            y="150"
            className="stroke-mask"
            fill="transparent"
            stroke="#D9D9D9"
            strokeWidth="1"
            fontSize="200"
            fontWeight="900"
            fontFamily="fontSpecial"
          >
            TON BOOKING
          </text>
        </svg> */}
        {/* <div className="relative w-full h-[200px]">
          <Image src={'/assets/decor/TON FOUNDATION.svg'} alt="logo" fill className="absolute" />
        </div> */}
      </div>
    </footer>
  );
}

export default FooterMobile;

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
