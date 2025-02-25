import AboutCard from "./components/AboutCard";
import CreatePost from "./components/CreatePost";
import Layout from "./components/Layout";
import MostViewedBlogs from "./components/MostViewedBlogs";
import PostCard from "./components/PostCard";
import Profile from "./components/Profile";
import ProfileCard from "./components/ProfileCard";
import RecentBlogs from "./components/RecentBlogs";
import TechStackCard from "./components/TechStackCard";

export default function Home() {
  return (
    <Layout>
      {/* <div className="flex flex-col items-center justify-center h-screen"> */}
        {/* <h2 className="text-2xl font-semibold dark:text-white">
          Welcome to Portfolio Social!
        </h2> */}
{/* <h1 className="text-gray-900 dark:text-white font-bold text-2xl">Welcome to Portfolio Social!</h1> */}

{/* <h1 className="text-black font-bold text-2xl">Welcome to Portfolio Social!</h1> */}
{/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Test Button</button> */}

{/* <Profile username="abhinandkrishna20" /> */}
      {/* </div> */}

      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <div className="max-w-8xl mx-auto grid px-4 grid-cols-12 gap-4">
        {/* Left Sidebar */}
        <div className="col-span-3 space-y-4  ">
          <ProfileCard username="abhinandkrishna20" />
          <AboutCard />
          <TechStackCard />
        </div>

        {/* Center Content */}
        <div className="col-span-6 space-y-4 ">
          <CreatePost />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 space-y-4 ">
          <MostViewedBlogs />
          <RecentBlogs />
        </div>
      </div>
    </div>
    </Layout>
  );
}
