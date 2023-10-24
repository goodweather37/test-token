import styles from "../styles/Home.module.css";
import { NextPage } from "next";

// @ts-ignore
const Home: NextPage = () => {

  return (
    <main className={styles.container}>
      <h1><span className={styles.red}>Locobitz</span><span className={styles.yellow}> Rewardz</span></h1>
    </main>
  );
};

export default Home;