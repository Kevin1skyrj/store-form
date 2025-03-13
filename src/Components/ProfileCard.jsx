"use client";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, FaBuilding, FaFileInvoice, FaClipboardCheck } from "react-icons/fa";

const ProfileCard = () => {
  const profile = {
    name: "Vishal Bala",
    email: "vishal.bala.100@gmail.com",
    mobile: "9079018358",
    city: "Kota",
    state: "Rajasthan",
    pinCode: "324009",
    designation: "Store Partner",
    status: "Accepted",
    pan: "ABCDE1234L",
    aadhar: "124578963698",
    gst: "dfsdvc546fdgfdgfg",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <div className="flex items-center space-x-4">
          <FaUser className="text-pink-600 text-4xl" />
          <div>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-500">{profile.designation}</p>
            <span className="inline-block mt-1 px-3 py-1 text-sm font-medium rounded-full 
              text-white bg-green-500">
              {profile.status}
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-4 text-gray-700">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-pink-500" />
            <span>{profile.email}</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaPhone className="text-pink-500" />
            <span>{profile.mobile}</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-pink-500" />
            <span>{profile.city}, {profile.state} - {profile.pinCode}</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaIdCard className="text-pink-500" />
            <span>PAN: {profile.pan}</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaClipboardCheck className="text-pink-500" />
            <span>Aadhar: {profile.aadhar}</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaFileInvoice className="text-pink-500" />
            <span>GST: {profile.gst}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
