// import Link from "next/link";

import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Home | Next App"
}


export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-black">
      <h1>Welcome to Next.js</h1>
    </main>
  );
}
