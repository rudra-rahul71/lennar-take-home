import React, { useState } from 'react';
import { TrialService, trialService } from '../../../../services/trial.service';
import styles from './HeroForm.module.css';

export function HeroForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    if (!TrialService.isValidEmail(trimmedEmail)) {
      setStatus('error');
      setMessage('Please enter a valid email address (e.g. name@example.com).');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const user = await trialService.createUser(trimmedEmail);
      setStatus('success');
      setMessage(`Welcome aboard! Trial started for ${user.email}.`);
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'An unexpected error occurred.');
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <input
          id="hero-email-input"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle') {
              setStatus('idle');
              setMessage('');
            }
          }}
          placeholder="Enter your email"
          className={styles.input}
          aria-label="Enter your email"
          disabled={status === 'loading'}
          required
        />
        <button
          type="submit"
          className={styles.submitButton}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Loading...' : 'Start free trial'}
        </button>
      </form>

      {status === 'success' && (
        <p className={`${styles.statusMessage} ${styles.successText}`} role="status">
          {message}
        </p>
      )}
      {status === 'error' && (
        <p className={`${styles.statusMessage} ${styles.errorText}`} role="alert">
          {message}
        </p>
      )}

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
