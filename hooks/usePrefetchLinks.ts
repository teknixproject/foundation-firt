import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Link = {
  title: string;
  href: string;
};

export const usePrefetchLinks = (links: Link[]) => {
  const router = useRouter();

  useEffect(() => {
    links.forEach((link) => {
      router.prefetch(link.href);
    });
  }, [links, router]);
};
