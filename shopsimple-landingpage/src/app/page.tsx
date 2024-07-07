import Image from "next/image";
import SellPoints from "./components/SellPoints";
import Signup from "./components/Signup";
import lastMessage from "./components/LastMessage";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen">
      <div className="md:flex lg:flex w-full">
        <div className="w-full">
          <SellPoints />
        </div>
        <div className="w-full">
          <Signup />
        </div>
      </div>
    </main>
  );
}
