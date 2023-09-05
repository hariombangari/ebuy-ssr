import { Menu, Container, Icon, Label } from "semantic-ui-react";
import Link from "next/link";

export function Header(): JSX.Element {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          eBuy.com
        </Menu.Item>
        <MenuItems />
        <Menu.Item position="right">
          <Label>
            <Icon name="shopping cart" />0
          </Label>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
export function MenuItems() : JSX.Element {
  return (
    <>
      {NAV_ITEMS.map((navItem, index) => (
        <Menu.Item key={index}>
          <Link href={navItem.href ?? "#"}>{navItem.label}</Link>
        </Menu.Item>
      ))}
    </>
  );
};
interface NavItem {
  label: string;
  href?: string;
}
const NAV_ITEMS: NavItem[] = [
  {
    label: "Catalog",
    href: "/catalog",
  },
  {
    label: "Checkout",
    href: "/checkout",
  },
];
export default Header;
