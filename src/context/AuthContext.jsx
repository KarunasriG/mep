import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const reset = () => {
    setUsername("");
    setMobileNumber("");
    setPassword("");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,

        mobileNumber,
        setMobileNumber,

        password,
        setPassword,

        isLogin,
        setIsLogin,

        reset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
