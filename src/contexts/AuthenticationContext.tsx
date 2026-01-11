// set up type for auth context with demo boolean auth state and provider functions
export interface AuthContextTypes {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}