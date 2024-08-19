import axios from 'axios';

const apiUrl = "http://api.edupulse.software/api/v1";

export const loginService = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});


// Usage :
// import loginService from "";
// import { useNavigate } from "react-router-dom";
// let token, decoded, aud, exp, learning_center_id, name, role, successLogin;
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [error, setError] = useState(null);
// const navigate = useNavigate();

// const handleLogin = async (event) => {
//   event.preventDefault();

//   try {
//     const response = await apiService.post("/auth/login", {
//       email,
//       password,
//     });

//     token = "Bearer ";
//     token = token + response.data.token;
//     decoded = jwtDecode(token);
//     aud = decoded.aud;
//     exp = decoded.exp;
//     learning_center_id = decoded.learning_center_id;
//     name = decoded.name;
//     role = decoded.role;
//     console.log(token);
//     successLogin = true;
//     navigate("/");
//     localStorage.setItem("successLogin", successLogin);
//     localStorage.setItem("token", token);
//     localStorage.setItem("aud", aud);
//     localStorage.setItem("exp", exp);
//     localStorage.setItem("learning_center_id", learning_center_id);
//     localStorage.setItem("role", role);

//     console.log(decoded);

//     setError(null);
//   } catch (error) {
//     console.error("Login error:", error);
//     setError("Invalid email or password. Please try again.");
//     successLogin = false;
//     localStorage.setItem("successLogin", successLogin);
//     console.log(successLogin);
//   }
// };