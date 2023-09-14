import BootstrapCarousel from "../../Carousel/Bootstrap";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Best Sport Pictures</h1>
      <BootstrapCarousel />
    </main>
  );
}
