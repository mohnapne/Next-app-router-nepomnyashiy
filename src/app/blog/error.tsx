'use client';
import { FC } from 'react';
// import cn from 'classnames'
// import styles from './error.module.css'



const error: FC = () => {
  // const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Ooops! {error.message}😅</h1>
    </div>
  );
};

export default error;
