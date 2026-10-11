import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Contexto global para autenticação. Mantém os dados do usuário acessíveis em toda a aplicação sem prop drilling.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Login simulado para demonstrar o fluxo de autenticação. Em produção, esse método consumiria uma API real.
  const login = async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser({
      id: "1",
      name: email.split("@")[0],
      email,
    });
  };

  // Registro simulado para criar um usuário localmente no frontend e manter o estado logado.
  const register = async (name: string, email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser({
      id: "1",
      name,
      email,
    });
  };

  // Encerra a sessão e remove o usuário do estado atual.
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
