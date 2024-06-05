
import Image  from "next/image";

export default function NotFound(){
    return(
       
    <h1  className={styles.pagina}>  <Image
    width={100}
    height={100}
    src={"/images/logo.jpg"}
></Image>
Pagina não encontrada</h1>);
}