"use client"

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"
import { cn } from "@/lib/utils";
import ReactFlagsSelect from "react-flags-select";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "#",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "#",
    description: "Visually or semantically separates content.",
  },
]

const MainNav = () => {
  const [country, setCountry] = React.useState("");

  return (
    <NavigationMenu className="px-32 py-4 gap-4 max-w-full justify-between">
      <div className="flex items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="153" height="29" viewBox="0 0 153 29" fill="none">
          <path d="M15.9084 9.64932C20.0811 3.91186 26.0793 1.13005 28.6873 0.260742C8.24103 3.80754 1.21699 20.5157 0.260742 28.4265C8.08456 19.0379 20.0811 12.7788 25.0362 11.9965C21.9066 10.1709 19.2987 9.91011 15.9084 9.64932Z" fill="#00F3B9" />
          <path d="M28.6873 0C16.7558 1.12302 7.21786 5.91504 3.94036 8.17067H7.95438C1.54669 18.8249 0.552387 25.4478 0 28.6873C8.61724 15.7294 20.4383 12.6339 22.3165 11.6621C19.8203 10.9533 14.3437 10.4318 10.4318 13.0397C12.7789 8.6062 25.4835 1.18781 28.6873 0Z" fill="#0036C3" />
          <path d="M61.7744 22.9504H39.7797V1.53052H61.7744V4.59263H42.8201V19.8883H61.7744V22.9504ZM59.1938 13.779H44.3329V10.7169H59.1938V13.779Z" fill="black" />
          <path d="M122.47 4.59263H103.486V22.9504H100.446V1.53052H122.47V4.59263ZM119.86 13.779H104.999V10.7169H119.86V13.779Z" fill="black" />
          <path d="M131.388 1.53027H127.755L137.7 13.9614L139.43 11.8099L131.388 1.53027Z" fill="black" fillOpacity="0.87" />
          <path d="M138.646 23.0455V15.3956L149.218 1.53003H152.999L142.107 15.3956V23.0455H138.646Z" fill="black" fillOpacity="0.87" />
          <path fillRule="evenodd" clipRule="evenodd" d="M82.1855 22.9501L93.3683 1.53027H89.8978L80.584 19.3925L79.1212 22.9501H82.1855ZM78.0173 21.6118L67.5471 1.53027H71.0028L79.5412 17.9055L78.0173 21.6118Z" fill="black" />
        </svg>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">Find EV Cars</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-screen gap-3 p-4 md:grid-cols-2">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">EV Guides</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-screen gap-3 p-4 md:grid-cols-2">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
      <NavigationMenuList className="">
        <NavigationMenuItem>
          <ReactFlagsSelect
            className="border-none"
            selected={country}
            onSelect={(code) => setCountry(code)}
            showSelectedLabel={false}
          />
        </NavigationMenuItem>
        <NavigationMenuItem className="flex text-sm font-bold">
          <Link href="/docs" className="hover:underline hover:decoration-2">
            Log In
          </Link>
          <p>{" / "}</p>
          <Link href="/docs" className="hover:underline hover:decoration-2">
            Sign Up
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu >
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default MainNav