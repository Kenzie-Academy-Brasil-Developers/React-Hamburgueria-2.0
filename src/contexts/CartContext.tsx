import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface iCartContextProps {
  children: React.ReactNode;
}
interface iCartContext {
  products: iCartProducts[];
  currentSale: iCartCurrentSale[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iCartCurrentSale[]>>;
  filteredProducts: iCartProducts[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<iCartProducts[]>>;
  listRequisition: () => void;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: boolean;
  openModal: () => void;
  addCart: (productData: iCartProducts) => void;
  validateUser: (data: iCartProducts) => void;
  deleted: (product: {}) => void;
  sum: any;
  deletedAll: () => void;
  removeSameItem: (product: iCartCurrentSale) => void;
}
export interface iCartProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export interface iCartCurrentSale {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity: number;
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iCartContextProps) => {
  const [products, setProducts] = useState<iCartProducts[]>([]);
  const [currentSale, setCurrentSale] = useState<iCartCurrentSale[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<iCartProducts[]>([]);
  const [dataUser, setDataUser] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const openModal = () => {
    setIsModal((oldState) => !oldState);
  };

  const listRequisition = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const response = await api.get("/products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      } catch (error) {
        localStorage.clear();
        navigate("/");
      }
    } else {
      navigate("/");
    }
  };

  const validateUser = () => {
    const token = localStorage.getItem("authToken");
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .get("/products")
      .then((response) => {
        setDataUser(response.data);
      })
      .catch((error) => navigate("/"));
  };

  const addCart = (productData: iCartProducts) => {
    const productExists = currentSale.find(
      (sale: any) => sale.name.toLowerCase() === productData.name.toLowerCase()
    );
    if (!productExists) {
      const newProduct = {
        ...productData,
        quantity: 1,
      };
      setCurrentSale([...currentSale, newProduct]);
    } else {
      setCurrentSale((old) =>
        old.map((product) =>
          product.id === productExists.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  };

  const deleted = (product: {}) => {
    const newCart = currentSale.filter((sale: any) => sale !== product);
    setCurrentSale(newCart);
  };
  const sum = currentSale.reduce((firstValue: any, actualValue: any) => {
    return actualValue.price * actualValue.quantity + firstValue;
  }, 0);

  const deletedAll = () => {
    setCurrentSale([]);
  };

  const removeSameItem = (product: iCartCurrentSale) => {
    if (product.quantity === 1) {
      deleted(product);
    }
    if (product.quantity > 1) {
      setCurrentSale((old) =>
        old.map((oldProduct) =>
          product.id === oldProduct.id
            ? { ...currentSale, ...product, quantity: product.quantity - 1 }
            : oldProduct
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        currentSale,
        setCurrentSale,
        filteredProducts,
        setFilteredProducts,
        listRequisition,
        setIsModal,
        isModal,
        openModal,
        addCart,
        validateUser,
        deleted,
        sum,
        deletedAll,
        removeSameItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
