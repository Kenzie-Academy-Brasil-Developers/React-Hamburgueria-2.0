import { Link, PageLogin } from "./styles";
import logo from "../../assets/Mask Group.png";
import vector from "../../assets/shopping-bag.png";
import { AuthContext, iDataLogin } from "../../contexts/AuthContext";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const { loginRequisition, handleRedirectHome } = useContext(AuthContext);

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (token) {
      handleRedirectHome();
    }
  }, []);
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataLogin>({
    resolver: yupResolver(formSchema),
  });

  return (
    <PageLogin>
      <form onSubmit={handleSubmit(loginRequisition)}>
        <div>
          <h2>Login</h2>
        </div>
        <div className="inputBox">
          <input required={true} {...register("email")} />
          <span>Email</span>
          <p>{errors.email?.message}</p>
        </div>
        <div className="inputBox">
          <input type="password" required={true} {...register("password")} />
          <span>Senha</span>
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Logar</button>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link to={"/register"}>Cadastrar</Link>
      </form>
      <div className="DivIntroduction">
        <img className="logo" alt="" src={logo} />
        <div className="divText">
          <div className="divImg">
            <img className="vector" alt="" src={vector} />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </p>
        </div>
      </div>
    </PageLogin>
  );
};

export default Login;
