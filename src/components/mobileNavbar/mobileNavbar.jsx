'use client';
import clsx from 'clsx';
import styles from './mobileNavbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCustomText } from '@/hooks/useText';

export default function MobileNavbar({ textArr }) {
  const pathName = usePathname();
  const setCapitalize = useCustomText('capitalize');

  return (
    <nav className={clsx(styles.mobileNavbar)}>
      {textArr.map((txt) => (
        <Link
          key={txt}
          href={`/${txt}`}
          className={clsx(pathName === '/' + txt ? styles.on : '')}
        >
          {setCapitalize(txt)}
        </Link>
      ))}
    </nav>
  );
}
