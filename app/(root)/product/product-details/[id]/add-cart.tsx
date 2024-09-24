"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addItem, CartItem } from "@/store/cartSlice";
import { Product } from "@/typing";
import React from "react";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addToCartHandler = () => {
    toast({ description: "Item added to cart", variant: "success" });
    dispatch(addItem(product));
  };
  return (
    <Button
      onClick={() => {
        addToCartHandler();
      }}
      className="mt-6 rounded"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
