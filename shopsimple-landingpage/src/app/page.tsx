import Image from "next/image";
import SellPoints from "./components/SellPoints";
import Signup from "./components/Signup";

export default function Home() {
  return (
    <main className="flex min-h-screen">
  
      <div className ="w-1/2">
        <SellPoints />
      </div>
      <div className ="w-1/2">
        <Signup />
      </div>
    </main>
  );
}
