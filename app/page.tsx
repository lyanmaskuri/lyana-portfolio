import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
      </main>
    </>
  );
}