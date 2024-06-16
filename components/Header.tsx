import Link from 'next/link';
import { FC } from 'react';
// import cn from 'classnames'
// import styles from './Header.module.css'


const Header: FC = ({ }) => {
  // const dispatch = useAppDispatch()
  return (
    <header>
      <Link href='/'>Home</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/about'>About</Link>
      <Link href='/get-started'>Get started</Link>
    </header>
  );
};

export default Header;
