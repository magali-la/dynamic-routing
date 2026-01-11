import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthenticationContext"

export default function Login() {
    // call custom hook to avoid ts error which checks if the context is available or not without having to use nonnull assertion
    const { login } = useAuth();
    // import useNavigate hook to use in handler
    const navigate = useNavigate();

    // create login button handler which updates auth state + redirects
    function handleLogin() {
        // update the state to true
        login();
        // redirect with navigate to the admin dashboard
        navigate("/admin");
    }

    return (
        <>
            <h1>Login Page</h1>
            <div style={{ display: 'flex', gap: '2rem'}}>
                {/* simulated login */}
                <input value="DemoUser"></input>
                <button onClick={handleLogin} style={{color: 'white'}}>Login</button>
            </div>
        </>
    )
}