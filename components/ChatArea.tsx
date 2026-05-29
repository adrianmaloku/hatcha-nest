export default function ChatArea() {
  return (
    <main className="flex flex-col flex-1 min-h-full">
      {/* Welcome */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-semibold text-white/90 tracking-tight mb-2">
          What&apos;s on your mind?
        </h1>
        <p className="text-white/40 text-base">Start a conversation or explore your ideas.</p>
      </div>

      {/* Input bar */}
      <div className="px-6 pb-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-3 bg-[#1a1a1a] border border-white/[0.08] rounded-2xl px-4 py-3 shadow-lg">
            <textarea
              rows={1}
              placeholder="Message Nest..."
              className="flex-1 resize-none bg-transparent text-white/90 placeholder-white/30 text-sm leading-6 outline-none max-h-48 overflow-y-auto"
              style={{ fieldSizing: "content" } as React.CSSProperties}
            />
            <button
              className="shrink-0 w-9 h-9 rounded-xl bg-orange-500 hover:bg-orange-400 active:bg-orange-600 flex items-center justify-center transition-colors"
              aria-label="Send"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-white"
              >
                <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.454 5.306a.75.75 0 0 0 .547.548l5.306 1.454a.75.75 0 0 0 .95-.826L8.287 4.04a.75.75 0 0 0-.548-.547L3.105 2.288Z" />
                <path d="M16.895 17.712a.75.75 0 0 0 .826-.95l-1.454-5.306a.75.75 0 0 0-.547-.547l-5.306-1.454a.75.75 0 0 0-.95.826l2.249 5.555a.75.75 0 0 0 .547.548l4.635 1.328Z" />
              </svg>
            </button>
          </div>
          <p className="text-center text-white/20 text-xs mt-3">
            Nest can make mistakes. Consider verifying important information.
          </p>
        </div>
      </div>
    </main>
  );
}
