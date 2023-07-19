// import { stateContext } from "@/state/context";
// import { useContext } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import TodoList from "@/components/todoList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className={styles.Home}>
          <TodoList />
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
