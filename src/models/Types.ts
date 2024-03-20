import { Product } from "./Product";

export type AddToCartHandler = (data: Product) => void;
export type RemoveFromCartHandler = (data: Product) => void;
export type EmptyCartHandler = () => void;
