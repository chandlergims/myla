'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Journal() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const entries = [
    {
      id: 1,
      filename: "conversation_01_8-25-25.txt",
      size: "2.4kb"
    },
    {
      id: 2,
      filename: "conversation_02_8-26-25.txt",
      size: "3.1kb"
    }
  ];

  const filteredEntries = entries.filter(entry =>
    entry.filename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 bg-[#1a1a1a] rounded text-white text-xs focus:outline-none w-64"
          />
        </div>

        <div className="space-y-1">
          {filteredEntries.map((entry) => (
            <Link 
              key={entry.id}
              href={`/journal/entry/${entry.id}`}
              className="block hover:text-gray-300 transition-colors"
            >
              <div className="flex items-center justify-center space-x-4 py-2 px-4 rounded">
                <span className="text-white text-xs font-typestar">{entry.filename}</span>
                <span className="text-gray-400 text-xs">{entry.size}</span>
              </div>
            </Link>
          ))}
          
          {filteredEntries.length === 0 && (
            <p className="text-gray-500 text-xs">No conversations found</p>
          )}
        </div>
      </div>
    </div>
  );
}
