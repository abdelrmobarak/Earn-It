import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/child/tasks", label: "Child Tasks" },
  { href: "/child/rewards", label: "Child Rewards" },
  { href: "/parent/tasks", label: "Parent Tasks" },
  { href: "/parent/rewards", label: "Parent Rewards" },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex w-full justify-center items-center gap-4 px-4 py-3 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
