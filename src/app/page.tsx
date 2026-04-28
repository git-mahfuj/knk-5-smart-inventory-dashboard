import { AddProductsForm } from "@/components/AddProductsForm";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="flex flex-col  flex-1 items-center font-sans dark:bg-black">
      <div className="translate-y-10">
        <h1 className="text-3xl">Smart Inventory Dashboard</h1>
        <AddProductsForm/>
      </div>
    </div>
  );
}
