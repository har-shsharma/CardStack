'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-black text-white py-5 px-6 shadow-md">
      <div className=" flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          CARDSTACK
        </Link>

        <nav className="flex gap-8">
          <Link href="/" className="text-lg font-medium hover:text-gray-300">
            HOME
          </Link>
          <Link href="/create" className="text-lg font-medium hover:text-gray-300">
            CREATE
          </Link>
        </nav>
      </div>
    </header>
  );
}
