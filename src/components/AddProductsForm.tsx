"use client";
import { productsStore } from "@/store/store";
export const AddProductsForm = () => {
  return (
    <div>
      <p className="text-2xl">Add Products Form</p>
      <form className="flex flex-col justify-center items-center mt-4">
        <label htmlFor="">Add Products</label>
        <input
          className="bg-white p-2 rounded-xl w-70 placeholder:text-gray-600"
          placeholder="ex:Books"
          value={productsStore.name}
        />
        <label htmlFor="">Price</label>
        <input
          className="bg-white p-2 rounded-xl w-70 placeholder:text-gray-600"
          placeholder="ex:Books"
          value={productsStore.name}
        />
        <label htmlFor="">Quantity</label>
        <input
          className="bg-white p-2 rounded-xl w-70 placeholder:text-gray-600"
          placeholder="ex:Books"
          value={productsStore.name}
        />
        <button
          className="mt-3 bg-white w-fit  py-2 text-black rounded-lg px-6"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};
