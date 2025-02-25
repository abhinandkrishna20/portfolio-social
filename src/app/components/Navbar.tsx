"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio Social</h1>
        <ThemeToggle />
      </div>
    </nav>
  );
}
