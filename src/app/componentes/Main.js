"use client";  // Adiciona essa linha para indicar que o componente é do lado do cliente
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

  const orderP = () => {
    const newList = [...listProduct].sort((a, b) => a.price - b.price);
    setListProduct(newList);
  };

  const orderPr = () => {
    const newList = [...listProduct].sort((a, b) => b.price - a.price);
    setListProduct(newList);
  };

  return (
  
        
      <main className={styles.main}>
        
     
      <button onClick={orderAz}>Ordenar A-Z</button>
      <button onClick={orderP}>Ordenar Preço Menor - Maior</button>
      <button onClick={orderPr}>Ordenar Preço Maior - Menor</button> <br></br>
    
        
      <div className={styles.main}>
            
              {listProduct.map((produto)=>
              <div key={produto.id} className={styles.card} >
              <p>{produto.title}</p>
              <p>{produto.price}</p>
             <p>{produto.description}</p>
             <p>{produto.category}</p>
              <Image
              width={100}
              height={100}
              src={produto.image} />
              <p>{produto.count}</p>
              </div>
              
              
              )}
              </div>
            </main>
         
        );
      }
      