import { FacebookLoginButton } from "react-social-login-buttons";
import { User, useAuth } from "./AuthContext";
function Login() {
  const { setUser } = useAuth();
  const handleLogin = () => {
    // @ts-ignore
    FB.login(function (response: { authResponse?: boolean }) {
      if (response.authResponse) {
        console.log("Welcome!  Fetching your information.... ");
        // @ts-ignore
        FB.api("/me", function (response: User) {
          console.log("Good to see you, " + response.name + ".");
          setUser(response);
          localStorage.setItem("user", JSON.stringify(response));
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    });
  };
  return (
    <section className="grid place-content-center h-screen">
      <FacebookLoginButton onClick={handleLogin} />
    </section>
  );
}

export default Login;
