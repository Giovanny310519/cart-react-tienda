import React from 'react'; // Importación del módulo React
import { data } from '../data'; // Importación de los datos de productos desde un archivo externo

export const ProductList = ({allProducts, setAllProducts}) => {
    // Función para añadir un producto al carrito
    const onAddProduct = (product) => {
        setAllProducts([...allProducts, product]); // Agrega el producto seleccionado a la lista de productos
  };
  console.log(allProducts)  // Imprime en la consola la lista de productos (para propósitos de depuración)

  return (
      <div className="container-items">
        {/* Mapeo de los datos para mostrar la lista de productos */}
           {data.map(product => (
             <div className="item" key={product.id}>
                <figure>
					        <img src={product.img} alt={product.nameProduct} /> {/* Imagen del producto */}
				</figure>
				<div className="info-product">
					<h2>{product.nameProduct}</h2> {/* Nombre del producto */}
					<p className="price">${product.price}</p> {/* Precio del producto */}
					<button onClick={() => onAddProduct(product)}>Añadir al carrito</button>  {/* Botón para añadir el producto al carrito */}
				</div>
             </div>
        ))}
    </div>
    );
};
