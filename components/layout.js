import FontProvider from "./FontProvider";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <FontProvider>
      <Navbar />
      {children}
    </FontProvider>
  );
}
