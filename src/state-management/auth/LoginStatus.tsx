import useAuth from "./useAuth";
import useAuthStore from "./authStore";

const LoginStatus = () => {
  // const {username, dispatch} = useAuth();
  const {user, logIn, logout} = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a
            // onClick={() => dispatch({type: "LOG OUT"})}
            onClick={() => logout()}
            href="#"
          >
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        // onClick={() => dispatch({type: "LOG IN", username: "mosh.hamedani"})}
        onClick={() => logIn("mosh.hamedani")}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
