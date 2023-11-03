import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Link href="/todo-list" className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
        Go to TODO LIST
      </Link>
    </main>
  )
}
