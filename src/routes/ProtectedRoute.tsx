import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthenticationContext";

export function ProtectedRoute() {
    // import isAuthenticated state
    const { isAuthenticated } = useAuth();

    // add conditional if not authenticated, route the user to the login page - so if the user goes to /admin link manually it will always redirect them back to login 
    // replace is used to avoid user going back and getting to the protected page by replacing the history
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    // otherwise return the child wrapped by this protected route component
    return <Outlet />
}