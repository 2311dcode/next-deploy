'use client';

import { useFormState } from 'react-dom';
import Link from 'next/link';
import { handleLogin } from '@/lib/actions';
import clsx from 'clsx';
import styles from './loginForm.module.scss';

export default function LoginForm() {
  const [state, formAction] = useFormState(handleLogin, undefined);
  return (
    <article className={clsx(styles.loginForm)}>
      <form action={formAction}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {state?.error}
        <Link href="/join">
          {"Don't have an account?"} <b>Join</b>
        </Link>
      </form>
    </article>
  );
}
