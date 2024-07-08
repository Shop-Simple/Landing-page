import Image from "next/image";
import SellPoints from "./components/SellPoints";
import Signup from "./components/Signup";
import lastMessage from "./components/LastMessage";

export default function Home() {
  return (
    <main className="flex w-full max-h-screen">
      <div className=" lg:flex w-full ">
        <div className="bg-[#4e1fc2] h-full w-full flex justify-center  items-center">
          <div className="flex bg-[#4e1fc2] w-full">
            <img src="/Frame_20.png" width={700} height={700}></img>
            {/* <SellPoints /> */}
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <Signup />
        </div>
      </div>
    </main>
  );
}
