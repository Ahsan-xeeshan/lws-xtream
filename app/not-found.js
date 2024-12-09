"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">The Page not found!</h1>
      <p className="text-gray-600 mt-4">
        We couldn&apos;t find the page in url: {pathname} you&apos;re looking
        for.
      </p>
      <Link
        href="/"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
