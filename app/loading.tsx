export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>

        {/* Text (optional) */}
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
}