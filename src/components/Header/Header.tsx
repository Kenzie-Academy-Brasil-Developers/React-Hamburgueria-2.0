import { HeaderStyled } from "./styles";
import logo from "../../assets/Mask Group.png";
import search from "../../assets/search.png";
import logout from "../../assets/logout.png";
import cart from "../../assets/carrinho-de-compras.png";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import Modal from "./modal";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const {
    products,
    currentSale,
    setCurrentSale,
    setFilteredProducts,
    isModal,
    openModal,
  } = useContext(CartContext);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  const cleanStorage = () => {
    localStorage.clear();
    navigate("/");
  };
  const sumCart = currentSale.reduce((firstValue: number, actualValue: any) => {
    return actualValue.quantity + firstValue;
  }, 0);

  const filteredCards = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    const filtered = products.filter((product) => {
      if (
        product.name.toLowerCase().includes(inputValue.trim()) ||
        product.category.toLowerCase().includes(inputValue.trim())
      ) {
        return product;
      }
    });
    setFilteredProducts(filtered);
  };

  return (
    <HeaderStyled>
      <div className="divContainer">
        <img className="logo" alt="" src={logo} />
        <div className="divIcons">
          <form onSubmit={filteredCards}>
            <input
              className="inputSearch"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Digitar Pesquisa"
            />
            <button className="buttonFilter">
              <img className="search" alt="" src={search} />
            </button>
          </form>

          <button className="buttonCart" onClick={openModal}>
            <span className="spanCart">{sumCart}</span>
            <img className="cart" src={cart} />
          </button>
          <button>
            <img onClick={cleanStorage} className="logout" src={logout} />
          </button>
        </div>
      </div>
      {isModal && <Modal />}
    </HeaderStyled>
  );
};
