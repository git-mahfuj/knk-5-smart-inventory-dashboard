"use client";
import {
  AddProductsForm,
} from "@/components/AddProductsForm";
import { ProductsList } from "@/components/ProductsList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full  flex-1 items-center font-sans dark:bg-black">
      <div className="translate-y-10 w-full text-center">
        <h1 className="text-3xl">Smart Inventory Dashboard</h1>
        <div className="flex justify-around w-full gap-4 mt-10">
          <AddProductsForm />
          <ProductsList />
        </div>
      </div>
    </div>
  );
}
