import AuthProvider from "./AuthContext";
import { CartProvider } from "./CartContext";

interface iProviderContext {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProviderContext) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};
