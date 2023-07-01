"use client";
import Goods from "../component/Goods.js";
const data = [
  {
    id: 0,
    name: "Tomatoes",
    price: 40,
    cnt: 4,
    img: "/tomato.jpg",
  },
  {
    id: 1,
    name: "Pasta",
    price: 30,
    cnt: 2,
    img: "/tomato.jpg",
  },
  {
    id: 2,
    name: "Coconut",
    price: 50,
    cnt: 1,
    img: "/tomato.jpg",
  },
];

export default function List() {
  return (
    <div className="container">
      <h4>상품 목록</h4>
      {data.map((el) => {
        return <Goods item={el} />;
      })}
    </div>
  );
}
