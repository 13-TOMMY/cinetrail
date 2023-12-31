import ThemeContextProvider from "./ThemeContext";
import UserContextProvider from "./UserContext";

export default function CombinedContextProvider({ children }) {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        {children}
      </UserContextProvider>
    </ThemeContextProvider>
  );
}