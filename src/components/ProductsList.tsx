/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Products, productsStore } from "@/store/store";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
const ProductsList = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const savedData = localStorage.getItem("store_products");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        productsStore.products = parsedData;
      } catch (error: any) {
        window.alert("failed to load products from productsData");
        return;
      }
    }
  }, []);

  const removeProduct = (id: number): void => {
    productsStore.removeProduct(id);

    const savedData = localStorage.getItem("store_products");

    if (savedData) {
      const products = JSON.parse(savedData);

      const updatedProducts = products.filter(
        (p: { id: number }) => p.id !== id,
      );

      localStorage.setItem("store_products", JSON.stringify(updatedProducts));
    }
  };

  const handleModalClose = (id: number): void => {
    productsStore.updateProduct(id);
  };
  return (
    <div className="text-black">
      <p className="text-2xl text-white">Products List</p>
      <div className="relative w-[750px] h-[750px] rounded-lg bg-white mt-3 overflow-y-auto p-4 flex flex-col  gap-3">
        {/* template */}
        {productsStore.products.map((product) => (
          <div key={product.id} className="border rounded-lg p-1">
            <span className="flex justify-around items-center">
              <p className=""> Product : {product.name}</p>
              <p className="">Price : {product.price}</p>
              <div className="relative">
                <p>Quantity {product.quantity}</p>
                {product.quantity < 5 ? (
                  <p className="absolute text-red-500 text-xs top-4 font-medium left-2">
                    {productsStore.lowStockMsg}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="px-3 py-1.5 bg-black text-white rounded-lg "
                  onClick={() => setIsModalOpen(true)}
                >
                  update
                </button>
                {isModalOpen && (
                  <div className="absolute bg-black w-[350px] p-3 border top-20 left-55 rounded-xl shadow-md ">
                    <h1 className="text-white text-xl mb-2">Update Products</h1>
                    <div className="flex flex-col justify-center items-center gap-6">
                      <div>
                        <label htmlFor="" className="text-white">
                          Update Products
                        </label>
                        <input
                          className="bg-white p-2 rounded-xl w-70 placeholder:text-gray-600"
                          placeholder="ex:Books"
                          value={productsStore.name}
                          onChange={(e) =>
                            (productsStore.name = e.target.value.trim())
                          }
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="" className="text-white">
                          Price
                        </label>
                        <input
                          className="bg-white p-2 rounded-xl w-70 placeholder:text-gray-600"
                          placeholder="ex:price"
                          value={productsStore.price}
                          onChange={(e) =>
                            (productsStore.price = Number(e.target.value))
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="" className="text-white">
                          Quantity
                        </label>
                        <input
                          className="bg-white p-2 rounded-xl w-70 placeholder:text-gray-600"
                          placeholder="ex:quantity"
                          value={productsStore.quantity}
                          onChange={(e) =>
                            (productsStore.quantity = Number(e.target.value))
                          }
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          className="mt-3 bg-white w-fit  py-2 text-black rounded-lg px-6"
                          onClick={() => setIsModalOpen(false)}
                        >
                          close
                        </button>
                        <button
                          className="mt-3 bg-white w-fit  py-2 text-black rounded-lg px-6"
                          type="submit"
                          onClick={() => handleModalClose(product.id)}
                        >
                          save
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <button
                  className="px-3 py-1.5 bg-black text-white rounded-lg "
                  onClick={() => removeProduct(product.id)}
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
