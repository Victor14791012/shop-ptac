

// export const metadata = {
//   title: "Meu Shop.com",
//   description: "E-commerce",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./page.js";




export const metadata = {
  title: 'Shop-Victor',
  description: 'E-comerce Vitão',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="pt-br">
      <body className="">
        
        <Header/>
        <Home/>
        <Footer/>
        

       
        </body>
    </html>
  );
}
