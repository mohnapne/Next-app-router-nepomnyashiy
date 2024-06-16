'use client';
import { FC } from 'react';
// import cn from 'classnames'
// import styles from './error.module.css'

interface Ierror {
  error: Error;
}

const error: FC<Ierror> = ({ error }) => {
  // const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Ooops! {error.message}😅</h1>
    </div>
  );
};

export default error;
