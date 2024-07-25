"use client";

import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link as UILink } from "@nextui-org/link";
import Link from "next/link";
import { useState } from "react"
import DefaultMenu from "./NavMenu.tsx";
import MenuSm from "./NavbarMenu.tsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<Navbar onMenuOpenChange={setIsMenuOpen} className="border border-red-800 p-2">
	<NavbarContent>
		<NavbarMenuToggle 
			aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
			className="sm:hidden"
		/>

		<NavbarBrand>
			<div className="font-bold text-inherit">Eather</div>
		</NavbarBrand>
	</NavbarContent>
    
    <DefaultMenu />
	 <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
	  
      <MenuSm />
</Navbar>
  );
};

export default Header;
