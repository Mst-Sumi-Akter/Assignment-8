import React, { useState, useMemo } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import star from "../assets/icon-ratings.png";
import downloadsIcon from "../assets/icon-downloads.png";
import { images } from "../assets/images";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem("installedApps");
    if (!saved) return [];

    const apps = JSON.parse(saved);
    // Convert downloads to number once on load
    return apps.map((app) => ({
      ...app,
      downloads: Number(app.downloads.toString().replace(/[^0-9]/g, "")),
    }));
  });

  const [sortOption, setSortOption] = useState("");

  const handleUninstall = (app) => {
    const updated = installedApps.filter((a) => a.id !== app.id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.info(`${app.title} uninstalled!`);
  };

  // Sorting logic
  const sortedApps = useMemo(() => {
    return [...installedApps].sort((a, b) => {
      if (sortOption === "downloadsLowHigh") return a.downloads - b.downloads;
      if (sortOption === "downloadsHighLow") return b.downloads - a.downloads;
      return 0;
    });
  }, [installedApps, sortOption]);

  if (installedApps.length === 0)
    return (
      <p className="text-center font-bold py-20 text-black">
        No apps installed yet!
      </p>
    );

  return (
    <div className="text-center py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Installed Apps</h1>
      <p className="mb-8 text-gray-600">
        Explore all trending apps installed by you.
      </p>

      {/* Apps Found + Sort Dropdown */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-800">
          {installedApps.length} Apps Found
        </h2>

        <select
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
          className="border border-gray-600 rounded-md px-4 py-2 text-gray-700 focus:outline-none"
        >
          <option value="">Sort By</option>
          <option value="downloadsLowHigh">Low → High</option>
          <option value="downloadsHighLow">High → Low</option>
        </select>
      </div>

      {/* App List */}
      {sortedApps.map((a) => (
        <div
          key={a.id}
          className="flex justify-between items-center bg-white shadow-md rounded-lg px-4 py-3 mb-3 hover:shadow-lg transition-all"
        >
          {/* Left: App Icon */}
          <div className="flex items-center gap-4">
            <img
             src={images[Number(a.id)] || "https://via.placeholder.com/80"}
             alt={a.title}
             className="w-30 h-30 object-cover rounded-md"
            />

            {/* Middle: App Info */}
            <div className="text-left">
              <h2 className="text-[16px] font-semibold text-gray-800">
                {a.title}{" "}
                <span className="text-gray-500 font-normal">
                  ({a.companyName})
                </span>
              </h2>

              {/* Stats Row */}
              <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <img src={downloadsIcon} alt="downloads" className="h-4 w-4" />
                  <span>{a.downloads.toLocaleString()}M</span>
                </div>

                <div className="flex items-center gap-1">
                  <img src={star} alt="rating" className="h-4 w-4" />
                  <span>{a.ratingAvg}</span>
                </div>

                <span>{a.size}MB</span>
              </div>
            </div>
          </div>

          {/* Right: Uninstall Button */}
          <button
            onClick={() => handleUninstall(a)}
            className="bg-[#00D390] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#00b77c] transition-all"
          >
            Uninstall
          </button>
        </div>
      ))}
    </div>
  );
};

export default Installation;
