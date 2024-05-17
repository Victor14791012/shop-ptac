import Image from "next/image"
import styles from "./page.module.css"

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products/")
  const data = await response.json();
  
  return (
    <main className={styles.main}>
      {data.map((produto)=>
      <div key={produto.id} className={styles.card} >
      <p>{produto.title}</p>
      <Image
      width={100}
      height={100}
      src={produto.image} />

      </div>
      
      )}
    </main>
  );
}
