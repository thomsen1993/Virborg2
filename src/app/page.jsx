import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import UsersRespond from "@/components/sections/UsersRespond";
import Welcome from "@/components/sections/Welcome";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Welcome />
      <Services />
      <Gallery />
      <UsersRespond />
      <Contact/>
    </main>
  );
}
