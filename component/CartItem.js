"use client";
export default function CartItem({ item }) {
  return (
    <div>
      <p>{item.name}</p>
      <p>{`$${item.price}`}</p>
      <p>{`${item.cnt}개`}</p>
    </div>
  );
}
