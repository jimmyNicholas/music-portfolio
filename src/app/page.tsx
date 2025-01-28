import NavBar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="relative min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            className="object-cover"
            src="/media/tree.png"
            width={2000}
            height={1000}
            alt="Picture of a distorted tree"
          />
        </div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl font-bold text-center">Your Content Here</h1>
        </div>
      </div>
    </>
  );
}
