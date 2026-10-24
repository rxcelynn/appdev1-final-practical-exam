import styles from "./SignUp.module.css";
import blossom from "../assets/blossom-flower.svg";
import googleIcon from "../assets/icons-google-logo.svg"; 
import appleIcon from "../assets/icons-apple-logo.svg"; 

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

          {/* Divider */}
          <div className={styles.divider}>
            <span>Or</span>
          </div>

          {/* Social Sign-In Buttons */}
          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialBtn}>
              <img src={googleIcon} alt="Google" className={styles.socialIcon} />
              Sign in with Google
            </button>
            <button type="button" className={styles.socialBtn}>
              <img src={appleIcon} alt="Apple" className={styles.socialIcon} />
              Sign in with Apple
            </button>
          </div>

          {/* Account Text Link */}
          <p className={styles.signinText}>
            Have an account? <a href="/login" className={styles.signinLink}>Sign In</a>
          </p>
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