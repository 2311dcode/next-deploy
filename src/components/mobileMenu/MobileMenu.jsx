'use client';
import clsx from 'clsx';
import styles from './mobileMenu.module.scss';
import { useGlobalData } from '@/hooks/useGlobalData';

export default function MobileMenu() {
  const { MenuOpen, setMenuOpen } = useGlobalData();
  return (
    <>
      {MenuOpen && (
        <aside className={clsx(styles.mobileMenu)}>
          <h1>MobileMenu</h1>
        </aside>
      )}
    </>
  );
}
