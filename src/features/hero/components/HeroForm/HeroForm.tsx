import React, { useState } from 'react';
import styles from './HeroForm.module.css';

export function HeroForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={styles.input}
          aria-label="Enter your email"
          required
        />
        <button type="submit" className={styles.submitButton}>
          Start free trial
        </button>
      </form>

      <p className={styles.helperText}>
        Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our{' '}
        <a href="#terms" className={styles.termsLink}>
          terms of service
        </a>
        .
      </p>
    </div>
  );
}
