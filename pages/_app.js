import Layout from "@/components/layout";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import localFont from "@next/font/local";

const melodrama = localFont({
  src: "../public/fonts/Melodrama-Variable.ttf",
  variable: "--font-melodrama",
});
const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Variable.ttf", style: "normal" },
    { path: "../public/fonts/Satoshi-VariableItalic.ttf", style: "italic" },
  ],
  variable: "--font-satoshi",
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`bg-primary ${melodrama.variable} ${satoshi.variable} w- h-screen overflow-hidden px-4`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
