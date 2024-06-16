// "use client";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Next App",
  description: "Created with love and passion",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function About() {
  return (
    <div>
      <span>select subitem:</span>
    </div>
  );
}
