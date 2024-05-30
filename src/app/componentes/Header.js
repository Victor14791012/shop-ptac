import Link from "next/Link";
import styles from "./css.module.css";
import Image  from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>




            <nav>
                <ul>
                    <Link href="/">
                    <li>Home</li>
                    </Link>
                    <Link href="/registro">
                    <li>Registro</li>
                    </Link>
                    <Link href="/localizacao">
                    <li>Localizacao</li>
                    </Link>
                    
                </ul>
            </nav>
        </header>
    )
}