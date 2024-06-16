import "~/styles/globals.css";
import { Roboto } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import Header from 'components/Header';
import Footer from 'components/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '300',
});

export const metadata = {
  title: "My app router app",
  description: "Created with love and passion",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={roboto.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
