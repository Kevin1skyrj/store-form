"use client";
import { useState } from "react";
import axios from "axios";

export default function StoreRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    pinCode: "",
    panNumber: "",
    aadharNumber: "",
    gstNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      console.log("Submitting data:", formData); // Debugging
      const response = await axios.post("/api/telecaller", formData);

      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.data.error || "Something went wrong");
      }

      setSuccess("Store registered successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
        state: "",
        pinCode: "",
        panNumber: "",
        aadharNumber: "",
        gstNumber: "",
      });
    } catch (err) {
      setError(err.response?.data?.error || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">

        {/* Full-width Header */}
        <div className="bg-pink-600 rounded-t-lg">
          <h2 className="text-2xl font-bold text-center text-white py-4">
             Store Registration Form
          </h2>
        </div>

        {/* Form Content */}
        <form className="p-8 space-y-6" onSubmit={handleSubmit}>
          {/* Error/Success Messages */}
          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {success}
            </div>
          )}

          {/* Store Owner Name */}
          <div>
            <label className="block font-medium">Store Owner Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full p-2 border rounded-md mt-1"
              required
            />
          </div>

          {/* Email & Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full p-2 border rounded-md mt-1"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="10 digit number"
                className="w-full p-2 border rounded-md mt-1"
                required
              />
            </div>
          </div>

          {/* City, State, PIN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full p-2 border rounded-md mt-1"
                required
              />
            </div>
            <div>
              <label className="block font-medium">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="w-full p-2 border rounded-md mt-1"
                required
              />
            </div>
            <div>
              <label className="block font-medium">PIN Code</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="6 digit PIN"
                className="w-full p-2 border rounded-md mt-1"
                required
              />
            </div>
          </div>

          <hr />

          {/* PAN Number */}
          <div>
            <label className="block font-medium">PAN Number</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              placeholder="Enter PAN number"
              className="w-full p-2 border rounded-md mt-1"
              required
            />
          </div>

          {/* Aadhar Number */}
          <div>
            <label className="block font-medium">Aadhar Number</label>
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              placeholder="12 digit Aadhar number"
              className="w-full p-2 border rounded-md mt-1"
              required
            />
          </div>

          {/* GST Number */}
          <div>
            <label className="block font-medium">GST Number (Optional)</label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              placeholder="Enter GST number if applicable"
              className="w-full p-2 border rounded-md mt-1"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-pink-400' : 'bg-pink-600 hover:bg-pink-700'} text-white p-3 rounded-md font-medium transition`}
          >
            
            {loading ? 'Registering...' : 'Register Store'}
          </button>
        </form>
      </div>
    </div>
  );
}
