import Image from 'next/image';
import styles from "./componentes/css.module.css";

export default function NotFound() {
  return (
    <div  className={styles.notFound }>
      <Image
        width={100}
        height={100}
        src="/images/logo.jpg"
        alt="Logo"
      />
      <h1 >Página não encontrada</h1>
    </div>
  );
}


/*"use client";  // Adiciona essa linha para indicar que o componente é do lado do cliente
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./css.module.css";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
      setListProduct(data);
    };

    getProduct();
  }, []);

  const orderAz = () => {
    const newList = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));
    setListProduct(newList);
  };

  return (
    <main>
      <button onClick={orderAz}>Ordenar A-Z</button>
      <div>
        {listProduct.map((product) => (
          <div key={product.id} >
            <div className={styles.card}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <Image width={100} height={100} src={product.image} alt={product.title} />
            <p>{product.count}</p>
          </div>
          </div>
        ))}
      </div>
    </main>
  );
}
*/