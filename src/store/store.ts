"use client";

import { action, makeAutoObservable, observable, reaction } from "mobx";

export interface Products {
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

const updateProducts = (
  products: Products[],
  id: number,
  name: string,
  price: number,
  quantity: number,
) : Products[] => {
  return products.map((product) =>
    product.id === id
      ? {
          ...product,
          name,
          price,
          quantity,
        }
      : product,
  );
};

class ProductStore implements Products {
  products: Products[] = [];
  id: number = 0;
  name: string = "";
  price: number = 0;
  quantity: number = 0;
  lowStockMsg: string = "low in stock";

  constructor() {
    makeAutoObservable(this , {
      id:observable,
      name:observable,
      price:observable,
      quantity:observable,
      lowStockMsg:observable,
      addProduct:action,
      removeProduct:action,
      updateProduct:action
    });
    reaction(
      () => this.products,
      (products) => {
        localStorage.setItem("set-products", JSON.stringify(products));
        console.log("ProductsSaved" , products)
      },
    );
  }

  addProduct(): void {
    if (!this.name.trim() || this.price <= 0 || this.quantity <= 0) return;
    this.products = addProducts(
      this.products,
      this.name,
      this.price,
      this.quantity,
    );
    this.name = "";
    this.price = 0;
    this.quantity = 0;
  }

  removeProduct(id: number): Products[] {
    return (this.products = removeProducts(this.products, id));
  }
  updateProduct(id: number): void {
    if (!this.name.trim() || this.price <= 0 || this.quantity <= 0) return;
    this.products = updateProducts(
      this.products,
      id,
      this.name,
      this.price,
      this.quantity,
    );
    this.name = "";
    this.price = 0;
    this.quantity = 0;
  }
}

export const productsStore = new ProductStore();
