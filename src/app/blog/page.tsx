// import cn from 'classnames'
// import styles from './page.module.css'
import { Metadata } from 'next';
import Link from 'next/link';

// к fetch на беке можно добавлять настройки
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // вот настройка кеша
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Unable to fetch posts')

  return res.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App"
};
// ! серверные компоненты могут быть асинхронными
const Blog = async () => {
  // забрали данные постов
  const posts = await getData();
  return (
    <div>
      <h1>blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
