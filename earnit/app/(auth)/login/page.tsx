"use client";

import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    console.log("Google login selected");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-10">
      <main className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
              <HeartIcon className="h-10 w-10 text-yellow-600" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 md:text-3xl">
              Earn It
            </h1>
          </Link>
          <p className="mt-2 text-zinc-500">Parent Login</p>
        </div>

        <div className="rounded-2xl border-2 border-zinc-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-2 text-center text-xl font-bold text-zinc-900 md:text-2xl">
            Welcome back
          </h2>
          <p className="mb-8 text-center text-zinc-500">
            Sign in to manage your family&apos;s tasks and rewards
          </p>

          <button
            onClick={handleGoogleLogin}
            className="group flex w-full items-center justify-center gap-3 rounded-full border-2 border-zinc-200 bg-white px-6 py-3 font-semibold text-zinc-700 transition-all hover:border-teal-200 hover:shadow-md"
          >
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-200"></div>
            <span className="text-sm text-zinc-400">Secure login</span>
            <div className="h-px flex-1 bg-zinc-200"></div>
          </div>

          <p className="text-center text-sm text-zinc-500">
            We use Google for secure authentication.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-zinc-500">
            New here? No problem — we&apos;ll create your account automatically.
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            <Link
              href="/"
              className="transition-colors hover:text-teal-500"
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
