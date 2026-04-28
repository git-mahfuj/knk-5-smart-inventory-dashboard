"use client";
import { productsStore } from "@/store/store";
import { observer } from "mobx-react";
const AddProductsForm = () => {
  const handleFormChange = (e: any): void => {
    e.preventDefault();
    localStorage.setItem("store_products", JSON.stringify(productsStore.products));
  };
  console.log(productsStore.products);
  return (
    <div className="text-black">
      <p className="text-2xl text-white">Add Products Form</p>
      <form
        onSubmit={handleFormChange}
        className="flex flex-col justify-center items-center mt-4"
      >
        <label htmlFor="">Add Products</label>
        <input
          className="bg-white p-2 rounded-xl w-70 placeholder:text-gray-600"
          placeholder="ex:Books"
          value={productsStore.name}
          onChange={(e) => (productsStore.name = e.target.value.trim())}
        />
        <label htmlFor="">Price</label>
        <input
          className="bg-white p-2 rounded-xl w-70 placeholder:text-gray-600"
          placeholder="ex:price"
          value={productsStore.price}
          onChange={(e) => (productsStore.price = Number(e.target.value))}
        />
        <label htmlFor="">Quantity</label>
        <input
          className="bg-white p-2 rounded-xl w-70 placeholder:text-gray-600"
          placeholder="ex:quantity"
          value={productsStore.quantity}
          onChange={(e) => (productsStore.quantity = Number(e.target.value))}
        />
        <button
          className="mt-3 bg-white w-fit  py-2 text-black rounded-lg px-6"
          type="submit"
          onClick={() => productsStore.addProduct()}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export const AddProductsObserver = observer(AddProductsForm);
