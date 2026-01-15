import Link from "next/link";
import {
  CheckBadgeIcon,
  CheckIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  FaceSmileIcon,
  GiftIcon,
  HeartIcon,
  ListBulletIcon,
  TrophyIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const roleCards = [
  {
    href: "/parent/tasks",
    label: "Parent",
    icon: HeartIcon,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    href: "/child/tasks",
    label: "Child",
    icon: UserIcon,
    bg: "bg-green-100",
    color: "text-green-600",
  },
];

const steps = [
  {
    icon: ClipboardDocumentListIcon,
    bg: "bg-blue-100",
    color: "text-blue-600",
    title: "Parents create tasks",
    desc: "Set up chores and assign credit values for each completed task",
  },
  {
    icon: CheckIcon,
    bg: "bg-orange-100",
    color: "text-orange-600",
    title: "Kids complete & earn",
    desc: "Children finish tasks and request credits for their hard work",
  },
  {
    icon: GiftIcon,
    bg: "bg-pink-100",
    color: "text-pink-600",
    title: "Redeem rewards",
    desc: "Use earned credits to claim prizes set by parents",
  },
];

const features = [
  {
    icon: UsersIcon,
    title: "Family Groups",
    desc: "Keep your whole family connected and organized in one place",
    bg: "bg-sky-50",
  },
  {
    icon: CheckBadgeIcon,
    title: "Approval System",
    desc: "Parents review and approve completed tasks before credits are awarded",
    bg: "bg-teal-50",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Credit System",
    desc: "Flexible credits let you customize rewards for your family",
    bg: "bg-yellow-50",
  },
  {
    icon: TrophyIcon,
    title: "Custom Rewards",
    desc: "Create prizes that motivate your kids, from screen time to treats",
    bg: "bg-pink-50",
  },
  {
    icon: ListBulletIcon,
    title: "Task Management",
    desc: "Easily create, assign, and track household chores",
    bg: "bg-blue-50",
  },
  {
    icon: FaceSmileIcon,
    title: "Kid Friendly",
    desc: "Simple interface that children can navigate on their own",
    bg: "bg-green-50",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-4 py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Where chores become
            <br />
            <span className="text-teal-500">achievements</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500 md:text-xl">
            Can be used by families anywhere!
            <br />
            <span className="font-medium text-teal-500">
              Teaching kids responsibility, one task at a time.
            </span>
          </p>
        </div>
      </section>

      <section className="px-4 pb-10 md:pb-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-5 text-center text-xl font-bold text-zinc-900 md:text-2xl">
            Get started as a...
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {roleCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col items-center rounded-2xl border-2 border-zinc-100 bg-white p-6 shadow-sm transition-all hover:border-teal-200 hover:shadow-md md:p-8"
              >
                <div
                  className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full ${card.bg} md:h-24 md:w-24`}
                >
                  <card.icon
                    aria-hidden="true"
                    className={`h-10 w-10 ${card.color}`}
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold text-zinc-900 md:text-xl">
                  {card.label}
                </h3>
                <span className="text-teal-500 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-extrabold text-zinc-900 md:text-3xl lg:text-4xl">
            How it works
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${step.bg} md:h-20 md:w-20`}
                >
                  <step.icon
                    aria-hidden="true"
                    className={`h-8 w-8 ${step.color}`}
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold text-zinc-900">
                  {step.title}
                </h3>
                <p className="text-zinc-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-extrabold text-zinc-900 md:text-3xl lg:text-4xl">
            Built for families
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={i} className={`rounded-xl ${feature.bg} p-6`}>
                <feature.icon
                  aria-hidden="true"
                  className="mb-3 h-6 w-6 text-zinc-400"
                />
                <h3 className="mb-2 font-bold text-zinc-900">{feature.title}</h3>
                <p className="text-sm text-zinc-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-500 px-4 py-12 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-lg text-teal-100">
            Join families who are making chores fun and rewarding
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/parent/tasks"
              className="rounded-full bg-white px-8 py-3 font-semibold text-teal-600 shadow-lg transition-all hover:bg-teal-50 hover:shadow-xl"
            >
              Start as Parent
            </Link>
            <Link
              href="/child/tasks"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-teal-600"
            >
              Start as Child
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-100 bg-white px-4 py-8">
        <p className="text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Earn It.
        </p>
      </footer>
    </div>
  );
}
