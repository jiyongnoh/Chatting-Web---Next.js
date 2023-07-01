"use client";
import CartItem from "@/component/CartItem";
const data = [
  { name: "Tomatoes", price: 40, cnt: 4 },
  { name: "Pasta", price: 30, cnt: 1 },
  { name: "Coconut", price: 50, cnt: 2 },
];
export default function Cart() {
  return (
    <div className="container">
      <h4>장바구니</h4>
      {data.map((item, index) => {
        return <CartItem key={index} item={item} />;
      })}
    </div>
  );
}
