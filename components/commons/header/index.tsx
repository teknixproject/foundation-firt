/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn, getDeviceType } from '@/lib/utils';
import Container from '@/components/container';
import { components } from './const';
import _ from 'lodash';

const MenuMobile = dynamic(() => import('./menuMobile'), { ssr: false });

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // State để lưu tên mục đã chọn
  const [selectedItem, setSelectedItem] = useState('FAQ');

  const sizeScreen = getDeviceType();
  const isMobile = sizeScreen === 'mobile';

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextPage = (href: string) => {
    router.push(href);
  };

  // Nếu đang chạy trên server, không render
  if (!isClient) {
    return null;
  }

  return (
    <div
      className={cn(
        'w-full flex justify-center items-center fixed z-[999] transition-all duration-300 h-[88px]',
        isScrolled && 'bg-opacity-90 backdrop-blur-sm shadow-lg'
      )}
      style={{
        background: isScrolled ? 'rgba(5, 5, 5, 0.35)' : '',
      }}
    >
      <Container>
        <div className="w-full flex items-center justify-between h-header max-lg:flex-col max-lg:justify-center max-lg:gap-2">
          <MenuMobile className="max-lg:absolute max-lg:left-4" />
          <Link href="/" className="flex items-center gap-2 max-lg:justify-center max-lg:w-full">
            <Image
              alt="logo"
              src="/assets/icons/logo.svg"
              width={147}
              height={48}
              className="w-[147px] h-[48px] max-lg:w-[75px] max-lg:h-[50px]"
            />
          </Link>

          <NavigationMenu className="max-lg:hidden bg-background/[0.08] border border-background/[0.08] backdrop-blur-sm p-2 rounded-full">
            <NavigationMenuList className="flex items-center gap-4">
              {_.map(components, (c) => (
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-16-500 cursor-pointer',
                      pathname === c.href && 'menu-active'
                    )}
                    onClick={() => nextPage(c.href)}
                  >
                    {c.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <button
            className="!text-16-500 rounded-full max-lg:bg-inherit max-lg:text-white max-lg:pr-0 max-lg:absolute max-lg:right-4"
            style={{
              background: !isMobile ? '#FFF' : '',
              padding: !isMobile ? '14px 24px' : '',
              color: !isMobile ? '#000' : '',
            }}
          >
            Tham gia miễn phí
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Header;
