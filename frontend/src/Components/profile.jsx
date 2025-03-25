import { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 mt-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Profile</h2>
            <p className="text-gray-600">Edit and manage your personal and account information here</p>
          </div>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center space-x-4 border-b pb-2 mb-6">
          {[
            { id: "personal", label: "Personal Information" },
            { id: "notifications", label: "Notifications" },
            { id: "history", label: "History" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
                activeTab === tab.id ? "border-orange-500 text-orange-600" : "border-transparent text-gray-600"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4">
          {activeTab === "personal" && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="John" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Doe" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="john@example.com" />
              </div>
              <div className="pt-4">
                <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <p className="text-gray-600 mb-4">Manage your email and push notifications here.</p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox text-orange-500 rounded" />
                  <span className="text-gray-700">Receive email updates</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox text-orange-500 rounded" />
                  <span className="text-gray-700">Receive SMS notifications</span>
                </label>
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div>
              <p className="text-gray-600 mb-4">Your recent activity will appear here.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>Logged in from a new device - March 25, 2025</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>Changed password - March 20, 2025</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>Updated profile picture - March 15, 2025</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
