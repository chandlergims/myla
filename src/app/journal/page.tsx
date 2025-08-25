export default function Journal() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Journal
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm min-h-[400px]">
            <div className="text-center text-gray-500 mt-32">
              <p className="text-lg">Journal entries will appear here...</p>
              <p className="text-sm mt-2">This is where Myla's thoughts and experiences will be documented.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
