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
  listRequisition: (data: iCartProducts) => void;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: boolean;
  openModal: () => void;
  addCart: (productData: iCartProducts) => void;
  validateUser: (data: iCartProducts) => void;
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

  useEffect(() => {
    if (token) {
      listRequisition();
    }
  }, [token]);
  const listRequisition = async () => {
    try {
      const response = await api.get("/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
