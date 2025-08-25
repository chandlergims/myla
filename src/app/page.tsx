import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Image
              src="/Adobe Express - file (32).png"
              alt="Myla AI Agent"
              width={200}
              height={200}
              className="rounded-full mx-auto shadow-lg object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Myla
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <p className="text-sm text-gray-500">
              incubating
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <Link href="/journal" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Journal
            </Link>
            <Link href="/video-blog" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Video Blog
            </Link>
            <Link href="/terminal" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Terminal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
