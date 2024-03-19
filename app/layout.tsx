import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pico MES Brewery Explorer',
  description: 'An engineering assessment by Nick Werner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col p-8">
          <h1 className="z-10 mb-4 max-w-5xl w-full items-center font-mono text-2xl">
            {"Pico MES's Brewery Explorer"}
          </h1>
          <div className="mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-4 lg:grid-cols-4 lg:text-left">
            <Link
              href={`/`}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-2 text-xl font-semibold`}>
                Home{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {
                  "Learn about Nick Werner, a hopeful candidate for Pico MES's engineering team!"
                }
              </p>
            </Link>
            <Link
              href="/table"
              className="group rounded-lg border
                border-transparent px-5 py-4 transition-colors
                hover:border-gray-300 hover:bg-gray-100
                hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-2 text-xl font-semibold`}>
                Table{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {"View Pico MES's favorite breweries in a table format!"}
              </p>
            </Link>
            <Link
              href="/grid"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-2 text-xl font-semibold`}>
                Grid{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {"View Pico MES's favorite breweries in a grid format!"}
              </p>
            </Link>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
