import clsx from 'clsx';
import styles from './header.module.scss';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import dynamic from 'next/dynamic';

//기존 client방식의 컴포넌트를  import시 ssr:false를 통해서 서버쪽에서 pre-build되지 않도록 설정
const NoSsrNavibar = dynamic(() => import('@/components/navbar/Navbar'), {
  ssr: false,
});

export default function Header() {
  return (
    <header className={clsx(styles.header)}>
      <h1>
        <Link href="/">DCODELAB</Link>
      </h1>

      {/* <Navbar textArr={['about', 'youtube', 'post']} /> */}
      <NoSsrNavibar textArr={['about', 'youtube', 'post']} />
    </header>
  );
}
