import logo from "../../assets/Mask Group.png";
import vector from "../../assets/shopping-bag.png";
import * as yup from "yup";
import { Link, PageRegister } from "./styles";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext, iDataRegister } from "../../contexts/AuthContext";

const Register = () => {
  const { registerRequisition } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    name: yup.string().required("Nome obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <PageRegister>
      <div className="DivIntroduction">
        <img className="logo" src={logo} />
        <div className="divText">
          <div className="divImg">
            <img className="vector" src={vector} />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(registerRequisition)}>
        <div>
          <h2>Cadastro</h2>
          <Link to={"login"}>Retornar para o login</Link>
        </div>
        <div className="inputBox">
          <input type="text" required={true} {...register("name")} />
          <span>Name</span>
        </div>
        <div className="inputBox">
          <input required={true} {...register("email")} />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input required={true} type="password" {...register("password")} />
          <span>Senha</span>
        </div>
        <div className="inputBox">
          <input required={true} type="password" {...register("password")} />
          <span>Confirmar Senha</span>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </PageRegister>
  );
};

export default Register;
