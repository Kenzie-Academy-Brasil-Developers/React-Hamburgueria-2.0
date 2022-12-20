import { ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CartContext } from "../../contexts/CartContext";
import trash from "../../assets/trash.png";

const Modal = () => {
  const {
    currentSale,
    openModal,
    addCart,
    deleted,
    sum,
    deletedAll,
    removeSameItem,
  } = useContext(CartContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalContainer>
      <div className="divTitle">
        <h2> Carrinho de compras </h2>
        <button className="buttonClose" onClick={openModal}>
          X
        </button>
      </div>
      {currentSale.length > 0 ? (
        <ul>
          {currentSale.map((product: any) => (
            <li key={product.name}>
              <div className="divImg">
                <img alt="" src={product.img} />
              </div>
              <div className="divNamePrice">
                <h3>{product.name}</h3>
                <div className="buttonValue">
                  <button
                    onClick={() => {
                      removeSameItem(product);
                    }}
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    onClick={() => {
                      addCart(product);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="trash" onClick={() => deleted(product)}>
                <img alt="" src={trash} />
              </button>
            </li>
          ))}
          <div className="divTotal">
            <p>Total</p>
            <p>R${sum.toFixed(2)}</p>
          </div>
          <button
            className="ButtonRemoveAll"
            onClick={() => {
              deletedAll();
            }}
          >
            Remover todos
          </button>
        </ul>
      ) : (
        <div className="divNoCard">
          <h2> Sua sacola está vazia </h2>
          <p> Adicione itens </p>
        </div>
      )}
    </ModalContainer>
  );
};

export default Modal;
