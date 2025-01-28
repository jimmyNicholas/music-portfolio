import { HoverCard } from "radix-ui";
import { CaretDownIcon } from "@radix-ui/react-icons";

interface HeaderNavProps {
  title: string;
  links?: string[];
}

const HeaderNav = ({ title, links }: HeaderNavProps) => {
  console.log(title, links);

  return (
    <HoverCard.Root>
      <HoverCard.Trigger className="flex bg-green-600 p-2 m-2 items-center">
        {title} {links ? <CaretDownIcon /> : null}
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content className="grid w-40 mt-2">
          {links ? links.map((link, index) => (
            <a key={index}
                className="bg-red-500 text-center px-2"
            >{link}</a>
          )) : null}
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>

    </HoverCard.Root>
  );
};

export default HeaderNav;
