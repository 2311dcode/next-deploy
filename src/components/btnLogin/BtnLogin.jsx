'use client';
import clsx from 'clsx';
import styles from './btnLogin.module.scss';
import Link from 'next/link';
import { handleLogout } from '@/lib/actions';

export default function BtnLogin({ session }) {
  //console.log(session);
  return (
    <>
      {!session ? (
        <Link href="/login" className={clsx(styles.btn, styles.btnLogin)}>
          Login
        </Link>
      ) : (
        <form className={clsx(styles.loginInfo)} action={handleLogout}>
          <span className={clsx(styles.thumbnail)}>
            <img src={session.user.image} />
          </span>
          <b>{session.user.name}님</b>
          <button className={clsx(styles.btn, styles.btnLogout)}>Logout</button>
        </form>
      )}
    </>
  );
}
