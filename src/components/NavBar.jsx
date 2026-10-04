"use client";

import { signOut, useSession } from "@/lib/auth-client";
import {Button, Link} from "@heroui/react";
// import { Link as NextLinks } from "next/link";

export function NavBar() {
  const { data: session, isPending } = useSession();

  const links = 
  <>
    <li>
      <Link href="/features" color="foreground">Features</Link>
    </li>
    <li>
      <Link href="/pricing" color="foreground">Pricing</Link>
    </li>
    <li>
      <Link href="/docs" color="foreground">Docs</Link>
    </li>
    <li>
      <Link href="/dashboard" color="foreground">Dashboard</Link>
    </li>
    <li>
      <Link href="/profile" color="foreground">Profile</Link>
    </li>
  </>

  const authLinks=session?.user?
  <>
  <span>Welcome, {session.user.name}</span>
  <button onClick={()=>signOut()} href="/sign-up" className="bg-blue-800 px-4 py-2">Sign Out</button>
  </>:
  isPending?
  <>
  <span>Loading...</span>
  </>
  :
  <>
  <Link href="/sign-in" variant="ghost" size="sm">Sign In</Link>
  <Link href="/sign-up" className="bg-blue-800 px-4 py-2">Sign Up</Link>
  </>;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-divider bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="font-bold text-inherit text-lg">
            ACME
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium">
            {links}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* <Button variant="ghost" size="sm"></Button>
          <Button color="primary" size="sm">Get Started</Button> */}
          {authLinks}
        </div>
      </div>
    </header>
  );
}