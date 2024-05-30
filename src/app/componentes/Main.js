import Link from "next/Link";
import styles from "./css.module.css";

import Image  from "next/image";

export default async function Main(){
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