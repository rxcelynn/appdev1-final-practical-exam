import styles from "./SignUp.module.css";
import blossom from "../assets/blossom-flower.svg";

function SignUp() {
  return (
    <main className={styles.signupPage}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>
      </section>

      <section className={styles.rightSection}>
        <img
          src={blossom}
          alt="Blossom flowers"
          className={styles.blossomImage}
        />
      </section>
    </main>
  );
}

export default SignUp;