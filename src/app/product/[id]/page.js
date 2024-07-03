import Image from "next/image";
import styles from "./product.module.css";

export default async function Product({ params }) {
  const response = await fetch("https://fakestoreapi.com/products/" + params.id);
  const data = await response.json();

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImage}>
        <Image src={data.image} alt={data.title} width={350} height={400} />
      </div>
      <div className={styles.productDetails}>
        <h1 className={styles.productTitle}>{data.title}</h1>
        <p className={styles.productCategory}><strong>Categoria:</strong> {data.category}</p>
        <p className={styles.productDescription}><strong>Descrição:</strong> {data.description}</p>
        <p className={styles.productPrice}><strong>Preço:</strong> ${data.price}</p>
        <p className={styles.productRating}><strong>Classificação:</strong> {data.rating.rate}</p>
        <p className={styles.productCount}><strong>Número de Avaliações:</strong> {data.rating.count}</p>
      </div>
    </div>
  );
}
