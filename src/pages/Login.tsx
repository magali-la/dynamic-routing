import { useAuth } from "../contexts/AuthenticationContext"

export default function Login() {
    // call custom hook to avoid ts error which checks if the context is available or not without having to use nonnull assertion
    const { login } = useAuth();

    return (
        <>
            <h1>Login Page</h1>
            {/* simulated login */}
            <input value="DemoUser"></input>
            <button onClick={login}>Login</button>
        </>
    )
}