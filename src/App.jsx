import { products as initialProducts } from "./components/products.json"
import { Products } from "./Products.jsx"
import { useState } from "react"

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  })
 //practicar hasta morir, esto es para Juniors, saber de memoria
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === "all" ||
          products.category === filters.category)
      )
    })
  }
   const filteredProducts = filterProducts(products)

  return (
  <Products products={filteredProducts} />
  )
}

export default App
