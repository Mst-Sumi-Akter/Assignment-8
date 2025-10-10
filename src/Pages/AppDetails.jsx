import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useApps from "../Hooks/useApps";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import review from "../assets/icon-review.png";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => a.id === parseInt(id));

  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem("installedApps");
    return saved ? JSON.parse(saved) : [];
  });

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (app && installedApps.some((a) => a.id === app.id)) {
      setIsInstalled(true);
    }
  }, [app, installedApps]);

  const handleInstall = () => {
    if (!app) return;
    if (!installedApps.some((a) => a.id === app.id)) {
      const updated = [...installedApps, app];
      setInstalledApps(updated);
      localStorage.setItem("installedApps", JSON.stringify(updated));
      setIsInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  if (loading) {
  return <LoadingSpinner />;
}

  if (!app) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">App Not Found</h2>
        <Link
          to="/apps"
          className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Back to Apps
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 border-b pb-10">
        {/* App Icon */}
        <div className="w-full md:w-1/3">
          <img
            src={app.image}
            alt={app.title}
            className="rounded-xl shadow-md w-full h-80 object-cover"
          />
        </div>

        {/* App Info */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {app.title}
          </h2>
          <p className="text-gray-600 mb-4 border-b pb-10">
            Developed by{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              {app.developer}
            </span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-6 mt-10">
            <div>
              <img src={download} alt="" />
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="text-2xl font-bold text-black">{app.downloads}</p>
            </div>
            <div>
              <img src={rating} alt="" />
              <p className="text-sm text-gray-500">Average Rating</p>
              <p className="text-2xl font-bold text-black">{app.ratingAvg}</p>
            </div>
            <div>
              <img src={review} alt="" />
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="text-2xl font-bold text-black">{app.reviews}K</p>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`px-6 py-3 rounded-md font-medium transition ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Ratings</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={app.ratings
                .slice()
                .reverse()
                .map((r) => ({ name: r.name, value: r.count }))}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={50} />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#ff8800"
                barSize={20}
                radius={[10, 10, 10, 10]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Description
        </h3>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <Link
          to="/apps"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          ← Back to Apps
        </Link>
      </div>
    </section>
  );
};

export default AppDetails;
