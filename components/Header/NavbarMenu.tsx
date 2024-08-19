import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
const MenuSm = () => {
    
    const menuItems = ['Home', 'New Appointment', 'Results'];
    return (
        <NavbarMenu>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                        color={
                            index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                        }
                        className="w-full"
                        href="#"
                        size="lg"
                        >
                        {item}
                    </Link>
                </NavbarMenuItem>
                ))}
      </NavbarMenu>
    );
}

export default MenuSm;
