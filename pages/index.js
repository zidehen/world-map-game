import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Form from "../components/form";
import Footer from "../components/footer";
import _app from "./_app";
import { useContext } from "react";
import NameContext from "../contexts/name";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useContext(NameContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>
          <Link href="/game">
            <a>Game page</a>
          </Link>
        </h3>

        <h1 className={styles.title}>
          <Header />
        </h1>
        <Form setName={setName} />
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
