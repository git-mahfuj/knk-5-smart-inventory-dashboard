"use client";
import { productsStore } from "@/store/store";
import { observer } from "mobx-react";
const AddProductsForm = () => {
  const handleFormChange = (e: any): void => {
    e.preventDefault();
    const productsClear = (): string => {
      return (
        (productsStore.name = ""),
        (productsStore.quantity = ""),
        (productsStore.price = "")
      );
    };
    productsClear();
  };
  console.log(productsStore.products);
  return (
    <div className="text-black">
      <p className="text-2xl">Add Products Form</p>
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
          onChange={(e) => (productsStore.price = e.target.value.trim())}
        />
        <label htmlFor="">Quantity</label>
        <input
          className="bg-white p-2 rounded-xl w-70 placeholder:text-gray-600"
          placeholder="ex:quantity"
          value={productsStore.quantity}
          onChange={(e) => (productsStore.quantity = e.target.value.trim())}
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
