// layout.js
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";



export const metadata = {
  title: 'Victor Boss',
  description: 'E-commerce Vitão',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />

      
      </body>
    </html>
  );
}
