"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./main.module.css";
import Spinner from "./Spinner";
import ErrorGetData from './ErrorGetData';

export default function Main() {
  const [listProducts, setListProducts] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");  
        const data = await response.json(); 
        setListProducts(data);
        setListComplete(data);
      } catch {
        setErrorFetch(true);
      }
    };
    getProduct();
  }, []);

  const orderAZ = () => {
    const newList = [...listProducts].sort((a, b) => a.title.localeCompare(b.title));
    setListProducts(newList);
  };

  const orderPriceMenor = () => {
    const newList = [...listProducts].sort((a, b) => a.price - b.price);
    setListProducts(newList);
  };

  const orderPriceMaior = () => {
    const newList = [...listProducts].sort((a, b) => b.price - a.price);
    setListProducts(newList);
  };

  const searchText = (text) => {
    setSearch(text);

    if (text.trim() === "") {
      setListProducts(listComplete);
      return;
    }

    const newList = listComplete.filter((products) =>
      products.title.toUpperCase().trim().includes(text.toUpperCase().trim())
    );
    setListProducts(newList);
  };

  if (listProducts.length === 0) {
    if (errorFetch === true) {
      return <ErrorGetData />;
    } else {
      return <Spinner />;
    }
  } else {
    return (
      <main className={styles.main}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={search}
            onChange={(e) => searchText(e.target.value)}
            placeholder="Pesquisar produtos..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={orderAZ}>Ordenar A-Z</button>
          <button onClick={orderPriceMenor}>Ordenar Preço Menor - Maior</button>
          <button onClick={orderPriceMaior}>Ordenar Preço Maior - Menor</button>
        </div>
        <div className={styles.productsContainer}>
          {listProducts.length === 0 ? (
            <p className={styles.noResultsMessage}>Nenhum produto encontrado.</p>
          ) : (
            listProducts.map((produto) => (
              <div key={produto.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image width={100} height={100} src={produto.image} alt={produto.title} />
                </div>
                <div className={styles.productInfo}>
                  <p className={styles.productName}>{produto.title}</p>
                  <p className={styles.productPrice}>${produto.price}</p>
                  <p className={styles.productDescription}>{produto.description}</p>
                  <p className={styles.productCategory}>{produto.category}</p>
                  <div className={styles.productActions}>
                    <button className={styles.addToCart}>Adicionar ao Carrinho</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    );
  }
}
