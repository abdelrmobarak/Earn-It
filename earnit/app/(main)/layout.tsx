import Navigation from "../components/Navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1">{children}</div>
    </div>
  );
}
