import React from "react"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenu, NavbarMenuToggle, Divider } from "@nextui-org/react"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = ["Profile", "Dashboard", "Activity", "Analytics", "System", "Deployments", "My Settings", "Team Settings", "Help & Feedback", "Log Out"]

  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Navbar maxWidth={"xl"} onMenuOpenChange={setIsMenuOpen} className=" fixed h-[80px]" shouldHideOnScroll isBlurred>
        <NavbarContent>
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden dark:text-white" />
          <NavbarBrand>
            <Link href="/" color={"primary"}>
              <p className="font-bold text-inherit">ACME</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent> */}
        <NavbarContent justify="end">
          <NavbarItem>
            {theme === "light" ? (
              <Button isIconOnly size="sm" variant={"light"} color="primary" onClick={() => setTheme("dark")}>
                <IconMoon />
              </Button>
            ) : (
              <Button isIconOnly size="sm" variant={"light"} color="primary" onClick={() => setTheme("light")}>
                <IconSun />
              </Button>
            )}
          </NavbarItem>
          {/* <NavbarItem className="hidden lg:flex">
            <Link href="/signin" color="primary">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem> */}
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"} className="w-full" href="#" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Divider />
    </div>
  )
}
