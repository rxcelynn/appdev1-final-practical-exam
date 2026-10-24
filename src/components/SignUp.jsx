
import styles from "./SignUp.module.css";
import blossom from "../assets/blossom-flower.svg";


function SignUp() {
  return (
    <main className={styles.signupPage}>
      <section className={styles.leftSection}>
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
