import Link from "next/link";
import Image from "next/image";
import style from "@/styles/Goods.module.css";

export default function Goods({ item }) {
  return (
    <div className={style.container}>
      <Image src={item.img} width={300} height={300} alt="dummy" />
      <div>
        <Link href={`/list/detail/${item.id}`}>
          <div>{item.name}:path</div>
        </Link>
        <Link
          href={{
            pathname: "/list/detail",
            query: { id: item.id },
          }}
        >
          <div>{item.name}:query</div>
        </Link>
      </div>
      <div>
        남은 수량
        <div>{item.cnt}개</div>
      </div>
    </div>
  );
}
