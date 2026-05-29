import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";

export default function Home() {
  return (
    <div className="flex h-full bg-[#0a0a0a] text-white" style={{ fontFamily: "var(--font-geist-sans)" }}>
      <Sidebar />
      <ChatArea />
    </div>
  );
}
