import About from "@/components/about";
import MainContent from "@/components/main-content";
import MainNav from "@/components/main-nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainNav />
      <MainContent />
      <About />
    </>
  );
}
