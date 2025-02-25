"use client";

import { useState, useEffect } from "react";

interface ProfileData {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export default function Profile({ username }: { username: string }) {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, [username]);

  if (!profile) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="w-20 h-20 rounded-full border border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{profile.name}</h2>
          <p className="text-gray-600 dark:text-gray-400">@{profile.login}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-4 text-gray-700 dark:text-gray-300">{profile.bio}</p>

      {/* Stats */}
      <div className="mt-4 flex justify-between text-gray-700 dark:text-gray-300">
        <div>
          <p className="font-bold">{profile.public_repos}</p>
          <p>Repositories</p>
        </div>
        <div>
          <p className="font-bold">{profile.followers}</p>
          <p>Followers</p>
        </div>
        <div>
          <p className="font-bold">{profile.following}</p>
          <p>Following</p>
        </div>
      </div>

      {/* GitHub Link */}
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block text-center text-blue-500 hover:underline"
      >
        View GitHub Profile
      </a>
    </div>
  );
}
