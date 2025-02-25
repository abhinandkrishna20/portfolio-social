import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen  dark:bg-gray-900">
      <Navbar />
      <main className="pt-10">{children}</main>
    </div>
  );
}
