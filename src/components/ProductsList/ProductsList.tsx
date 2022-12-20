import { UlStyled } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const ProductsList = () => {
  const {
    products,
    currentSale,
    setCurrentSale,
    filteredProducts,
    setFilteredProducts,
    addCart,
  } = useContext(CartContext);

  return (
    <UlStyled>
      {filteredProducts.length !== 0
        ? filteredProducts.map((product, index) => (
            <li key={product.id}>
              <div>
                <img alt="" src={product.img} />
              </div>
              <h3>{product.name}</h3>
              <h4>{product.category}</h4>
              <p>R${product.price.toFixed(2)}</p>
              <button onClick={() => addCart(product)}>Adicionar</button>
            </li>
          ))
        : products.map((product, index) => (
            <li key={product.id}>
              <div>
                <img alt="" src={product.img} />
              </div>
              <h3>{product.name}</h3>
              <h4>{product.category}</h4>
              <p>R${product.price.toFixed(2)}</p>
              <button onClick={() => addCart(product)}>Adicionar</button>
            </li>
          ))}
    </UlStyled>
  );
};
