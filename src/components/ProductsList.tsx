"use client";
import { productsStore } from "@/store/store";
import { observer } from "mobx-react";
const ProductsList = () => {
  return (
    <div className="text-black">
      <p className="text-2xl">Products List</p>
      <div className="w-[750px] h-[750px] rounded-lg bg-white mt-3 overflow-y-auto p-4 flex flex-col  gap-3">
        {/* template */}
        {productsStore.products.map((product) => (
          <div key={product.id} className="border rounded-lg p-1">
            <span className="flex justify-around items-center">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.quantity}</p>

              <div className="flex items-center gap-4">
                <button className="px-3 py-1.5 bg-black text-white rounded-lg ">
                  update
                </button>
                <button
                  className="px-3 py-1.5 bg-black text-white rounded-lg "
                  onClick={() => productsStore.removeProduct(product.id)}
                >
                  delete
                </button>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProductsListObserver = observer(ProductsList);
