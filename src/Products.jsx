//hacer paginacion correctamente lnea 9 (slice(0, 10))
//las imagenes no se muestran se puede hacer algo para probar q es
import "./components/Products.css"
import { AddToCartIcon } from "./components/Icons.jsx"

export function Products ({ products }) {
    return (
        <main className="products">
            <ul>
                {products.slice(0, 10).map(product => (
                    <li key={product.id}>
                        <img
                        src={product.thumbnail}
                        alt={product.title}/>
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />                                
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}