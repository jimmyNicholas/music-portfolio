import { HoverCard } from "radix-ui";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface LinkProps {
  link: string;
  title: string;
}

interface HeaderNavProps {
  link: string;
  title: string;
  subLinks?: LinkProps[];
}

const HeaderNav = ({ link, title, subLinks }: HeaderNavProps) => {

  return (
    <HoverCard.Root>
      <HoverCard.Trigger className="flex bg-green-600 p-2 m-2 items-center">
        <Link href={link}>{title}</Link>
         {subLinks ? <CaretDownIcon /> : null}
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content className="grid w-40 mt-2">
          {subLinks ? subLinks.map((subLink: LinkProps, index: number) => (
            <a key={index}
                href={subLink.link}
                className="bg-red-500 text-center px-2"
            >{subLink.title}</a>
          )) : null}
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>

    </HoverCard.Root>
  );
};

export default HeaderNav;
