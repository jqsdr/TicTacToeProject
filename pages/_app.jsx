import "../src/app/globals.css"; // Импортируем новый файл со стилями
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(inter.className, "text-slate-900")}>
      <Component {...pageProps} />
      <div id="modals"></div>
    </div>
  );
}
