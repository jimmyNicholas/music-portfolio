import HeaderNav from "@/components/ui/HeaderNav";

export default function NavBar() {
  return (
    <div className="flex justify-end bg-slate-500 px-4">
      {navLinksConfig.map((navLink, index) => (
        <HeaderNav key={index} {...navLink} />
      ))}
      {/* <HeaderNav title={"home"} />
      <HeaderNav title={"about"} links={["this", "that"]} />
      <HeaderNav title={"Lash Lash"} links={["this", "that"]} />
      <HeaderNav title={"Mongen"} links={["this", "that"]} /> */}
    </div>
  );
}

export const navLinksConfig = [
  {
    link: "/home",
    title: "home",
  },
  {
    link: "/about",
    title: "about",
    subLinks: [
      {
        link: "/foo",
        title: "foo",
      },
      {
        link: "/bar",
        title: "bar",
      },
    ],
  }
];
