'use client';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn, getDeviceType } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterMobile from './mobile';
import Container from '@/components/container';

function Footer() {
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

  const deviceType = getDeviceType();
  const isMobile = deviceType === 'mobile';

  return isMobile ? (
    <FooterMobile />
  ) : (
    <footer className="bg-white relative overflow-hidden">
      <Container className="main:!px-[70px] py-16">
        <div className="w-full flex items-center justify-between max-lg:flex-col max-lg:gap-y-10">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-base font-medium leading-[150%] text-typo1">Contact Us</p>
            <p className="text-base font-semibold leading-[150%] text-typo1">
              contact@coincapmarket.teknixcorp
            </p>
          </div>
          <div className="w-[800px] max-lg:w-full px-8 max-lg:px-0 border-x border-[#E7E5E4] max-lg:border-0 flex flex-col items-center justify-center gap-16">
            <div className="flex flex-col gap-2 max-lg:items-center">
              <h3 className="text-heading2_2 font-medium text-typo1">Let’s Get In Touch!</h3>
              <p className="text-base leading-[150%] text-description6D max-lg:text-center">
                {`What' s inside? Exclusive sales, new arrivals & much more.`}
              </p>
            </div>
            <div className="w-[450px] border border-[#E7E5E4] max-lg:border-0 rounded-full pl-6 py-4 relative max-lg:w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="text-base leading-[150%] text-descriptionB1 outline-none w-1/2 bg-transparent"
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
      <Container className="main:!px-[70px] py-2 z-10">
        <div className="flex items-center justify-between">
          <Link href={'/'} className="flex items-center gap-2">
            <Image alt="logo" src={'/assets/images/LogoTBK.png'} width={110} height={48} />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href={'#'}
              className="text-base font-medium leading-[150%] text-black underline"
              style={{
                fontWeight: 400,
              }}
            >
              Terms & Conditions
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_LINK_PRIVARY_POLICY || ''}
              className="text-base font-medium leading-[150%] text-black underline"
              style={{
                fontWeight: 400,
              }}
              target="_blank"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
      {/* <Container className="main:!px-[70px] py-2 z-10">
        <div className="flex items-center justify-center">
          <p className="text-paragraph2 text-description6D">
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
        {/* <div className="relative w-full h-[200px] z-0">
          <Image
            src={"/assets/decor/TON FOUNDATION.svg"}
            alt="logo"
            fill
            className="absolute"
          />
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;

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
