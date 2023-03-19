import Layout from "@/components/layout";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import localFont from "next/font/local";

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
const neueHaas = localFont({
  src: [
    {
      path: "../public/fonts/NeueHaasDisplayBlack.ttf",
      style: "normal",
      weight: "900",
    },
    {
      path: "../public/fonts/NeueHaasDisplayBlackItalic.ttf",
      style: "italic",
      weight: "900",
    },
    {
      path: "../public/fonts/NeueHaasDisplayMedium.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/NeueHaasDisplayMediumItalic.ttf",
      style: "italic",
      weight: "400",
    },
  ],
  variable: "--font-neuehaas",
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`bg-primary ${melodrama.variable} ${satoshi.variable} ${neueHaas.variable}`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
