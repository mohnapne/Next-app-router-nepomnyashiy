import { FC } from 'react';
// import cn from 'classnames'
// import styles from './loading.module.css'

interface Iloading { }

const loading: FC<Iloading> = ({ }) => {
  // const dispatch = useAppDispatch()
  return (
    <div>
      <h1>loading...</h1>
    </div>
  );
};

export default loading;
