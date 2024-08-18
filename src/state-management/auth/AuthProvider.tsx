import React, {ReactNode, useReducer} from 'react';
import authReducer from "./authReducer";
import AuthContext from "./authContext";

interface Props {
  children: ReactNode
}
function AuthProvider({children}: Props) {
  const [username, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{username, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;