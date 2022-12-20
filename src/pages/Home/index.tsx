import { useContext, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import Modal from "../../components/Header/modal";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";

const Home = () => {
  const { isModal, openModal } = useContext(CartContext);
  const { handleRedirectLogin, handleRedirectHome } = useContext(AuthContext);

  useEffect(() => {
    const autoHome = async () => {
      const token = window.localStorage.getItem("authToken");
      if (!token) {
        handleRedirectLogin();
      } else {
        await handleRedirectHome();
      }
    };
    autoHome();
  }, []);

  return (
    <>
      <Header />
      <ProductsList />
      {isModal && <Modal />}
    </>
  );
};
export default Home;
