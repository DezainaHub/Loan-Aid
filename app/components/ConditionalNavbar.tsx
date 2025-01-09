"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return !isHomePage ? <Navbar /> : null;
}
