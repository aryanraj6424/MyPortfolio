import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "react-toastify/dist/ReactToastify.css";
import "@/app/css/card.scss";
import "@/app/css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Aryan Raj - Software Developer",
  description:
    "This is the portfolio of Aryan Raj. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
