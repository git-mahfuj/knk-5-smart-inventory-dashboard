"use client";

import { makeAutoObservable } from "mobx";

interface Products {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const addProducts = (
  products: Products[],
  name: string,
  price: number,
  quantity: number,
): Products[] => {
  return [
    ...products,
    {
      id: Date.now(),
      name,
      price,
      quantity,
    },
  ];
};

const removeProducts = (products: Products[], id: number): Products[] => {
  return products.filter((product) => product.id !== id);
};

class ProductStore {
  products: Products[] = [];
  name: string = "";
  price: number = 10;
  quantity: number = 10;

  constructor() {
    makeAutoObservable(this);
  }

  addProduct(): Products[] {
    return (this.products = addProducts(
      this.products,
      this.name,
      this.price,
      this.quantity,
    ));
  }

  removeProduct(id: number): Products[] {
    return (this.products = removeProducts(this.products, id));
  }
}

export const productsStore = new ProductStore();
