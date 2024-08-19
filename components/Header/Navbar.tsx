"use client";

import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useState } from "react"
import DefaultMenu from "./NavMenu";
import MenuSm from "./NavbarMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<Navbar onMenuOpenChange={setIsMenuOpen} className="border p-2">
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
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
	  
      <MenuSm />
</Navbar>
  );
};

export default Header;
