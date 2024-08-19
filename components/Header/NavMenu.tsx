import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

const DefaultMenu = () => {
    return (
        <NavbarContent className="hidden sm:flex" justify="center">
            <NavbarItem className="flex gap-4">
                <Link href="/" className="block">Results</Link>
                <Link href="/" className="block">New Appointment</Link>
                <Link href="/" className="block">Session</Link>
            </NavbarItem>
	</NavbarContent>
    );

}


export default DefaultMenu;
