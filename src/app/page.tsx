import Image from 'next/image';
import Link from 'next/link';
import TerminalBackground from '@/components/TerminalBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <TerminalBackground />
      
      {/* Status Indicator under navbar */}
      <div className="flex justify-end px-4 py-2">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <p className="text-sm text-gray-400">
            breathing
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 relative">
            <Image
              src="/Adobe Express - file (32).png"
              alt="Myla AI Agent"
              width={150}
              height={150}
              className="rounded-full mx-auto object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Myla
          </h1>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <Link href="/journal" className="text-gray-300 hover:text-white text-sm font-medium">
              Journal
            </Link>
            <Link href="/video-blog" className="text-gray-300 hover:text-white text-sm font-medium">
              Video Blog
            </Link>
            <Link href="/terminal" className="text-gray-300 hover:text-white text-sm font-medium">
              Terminal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
