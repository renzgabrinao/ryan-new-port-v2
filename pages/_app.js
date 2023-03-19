import FontProvider from "@/components/FontProvider";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence initial={false} mode="sync">
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </Layout>
  );
}
