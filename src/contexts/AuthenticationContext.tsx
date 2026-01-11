import { createContext, useContext, useState } from "react";

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

// add custom Hook to ensure the components using the hook are wrapped in auth provider and show error if not - in this case, everything is wrapped by auth provider in main.tsx, but this also helps clear errors with ts when importing the context because the type could be undefined. this hook just checks if the context is able to be used or not (undefined or not and returns it wherever you are importing it)
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context){
        throw Error('useAuth needs to be wrapped by AuthProvider to be used')
    }
    return context;
}