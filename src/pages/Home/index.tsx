import { useContext, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
  const { handleRedirectLogin } = useContext(AuthContext);

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      handleRedirectLogin();
    }
  }, []);

  return (
    <>
      <Header />
      <ProductsList />
    </>
  );
};
export default Home;
