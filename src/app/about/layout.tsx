import Link from 'next/link';
import { FC } from 'react';
// import cn from 'classnames'
// import styles from './layouts.module.css'

interface Ilayouts {

}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li><Link href='/about/contacts'>Contacts</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
      </ul>
      {children}
    </div>
  );
};


