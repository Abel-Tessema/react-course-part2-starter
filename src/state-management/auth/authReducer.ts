
interface LoginAction {
  type: "LOG IN",
  username: string
}

interface LogOutAction {
  type: "LOG OUT"
}

export type AuthAction = LoginAction | LogOutAction;

const authReducer = (username: string, action: AuthAction): string => {
  if (action.type === "LOG IN") return action.username;
  if (action.type === "LOG OUT") return "";
  return username;
}

export default authReducer;