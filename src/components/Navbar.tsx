import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black">
      <div className="w-full px-4">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <Link href="/" className="text-sm font-semibold text-white hover:text-gray-300 cursor-pointer">
              Myla's World
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/journal" className="text-gray-300 hover:text-white px-2 py-1 rounded-md text-xs font-medium">
              Journal
            </Link>
            <Link href="/video-blog" className="text-gray-300 hover:text-white px-2 py-1 rounded-md text-xs font-medium">
              Video Blog
            </Link>
            <Link href="/terminal" className="text-gray-300 hover:text-white px-2 py-1 rounded-md text-xs font-medium">
              Terminal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
