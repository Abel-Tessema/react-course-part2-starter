import React, {Dispatch} from "react";
import {AuthAction} from "./authReducer";

interface AuthContextType {
  username: string,
  dispatch: Dispatch<AuthAction>
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;