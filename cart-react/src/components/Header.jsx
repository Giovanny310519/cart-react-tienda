import { useState } from 'react';  // Importación del hook useState desde React

// Componente funcional Header que recibe múltiples propiedades
export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	// Estado local para controlar la visibilidad del carrito
	const [active, setActive] = useState(false);

	// Función para eliminar un producto del carrito
	const onDeleteProduct = product => {
		// Filtrar productos para obtener un nuevo array sin el producto eliminado
		const results = allProducts.filter(
			item => item.id !== product.id
		);
        // Actualizar el total, la cantidad de productos y la lista de productos
		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};
    // Función para limpiar el carrito (eliminar todos los productos)
	const onCleanCart = () => {
		setAllProducts([]); // Vaciar lista de productos
		setTotal(0); // Reiniciar total a cero
		setCountProducts(0); // Reiniciar cantidad de productos a cero
	};

	// Renderizado del componente Header con contenido HTML y lógica condicional
	return (
		<header>
			<h1>Tienda</h1>

			<div className='container-icon'>
				{/* Icono del carrito */}
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)} // Alternar la visibilidad del carrito al hacer clic
				>
					{/* Icono del carrito y contador de productos en el carrito */}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						{/* Icono del carrito */}
                        {/* ... */}
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span> {/* Mostrar la cantidad de productos en el carrito */}
					</div>
				</div>

                {/* Contenedor de los productos en el carrito */}
				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{/* Condición para mostrar los productos o un mensaje si el carrito está vacío */}
					{allProducts.length ? (
						// Mostrar los productos en el carrito
						<>
						{/* ... */}
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{product.quantity}
											</span>
											<p className='titulo-producto-carrito'>
												{product.nameProduct}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};