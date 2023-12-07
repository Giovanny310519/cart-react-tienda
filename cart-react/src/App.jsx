import { useState } from 'react'; // Importación del hook useState desde React
import { Header } from './components/Header'; // Importación del componente Header
import { ProductList } from './components/ProductList'; // Importación del componente ProductList

function App() {
	// Definición de estados utilizando useState
	const [allProducts, setAllProducts] = useState([]); // Estado para almacenar todos los productos
	const [total, setTotal] = useState(0);  // Estado para el total de la compra
	const [countProducts, setCountProducts] = useState(0); // Estado para contar productos

	// Componente principal que renderiza Header y ProductList
	return (
		<>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		</>
	);
}

export default App; // Exporta el componente App como componente principal