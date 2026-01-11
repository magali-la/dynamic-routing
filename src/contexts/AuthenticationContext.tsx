import { createContext, useState } from "react";

// set up type for auth context with demo boolean auth state and provider functions
export interface AuthContextTypes {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

// set up provider with functions
export const AuthProvider = ({ children }: { children: React.ReactNode}) => {
    // set up auth state
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // set up provider functions
    function login() {
        setIsAuthenticated(true);
    }
    
    function logout() {
        setIsAuthenticated(false);
    }

    const value: AuthContextTypes = {
        isAuthenticated,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}