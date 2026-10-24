import styles from "./SignUp.module.css";
import blossom from "../assets/blossom-flower.svg";

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.signupPage}>
      <section className={styles.leftSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Get Started Now</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="Enter your name"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="Name"
              />
            </div>

            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="terms"
                className={styles.checkbox}
              />
              <label htmlFor="terms" className={styles.checkboxLabel}>
                I agree to the <a href="#terms" className={styles.link}>terms & policy</a>
              </label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Signup
            </button>
          </form>
        </div>
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