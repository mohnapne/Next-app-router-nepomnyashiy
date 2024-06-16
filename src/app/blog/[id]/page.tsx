import { Metadata } from 'next';
import { FC } from 'react';
// import cn from 'classnames'
// import styles from './page.module.css'

interface Iprops {
  params: {
    id: string;
  };
}

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // вот настройка кеша
    next: { revalidate: 60 }
  });
  return res.json();
}


// metadata в динамике для показа во вкладке
export async function generateMetadata({ params: { id } }: Iprops): Promise<Metadata> {
  // на уровне meta data мы тоже можем забирать данные из fetch
  const post = await getData(id);
  return {
    title: post.title
  };
}

const page: FC<Iprops> = async ({ params: { id } }) => {
  const post = await getData(id);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default page;
