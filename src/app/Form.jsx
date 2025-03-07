"use client";

export default function StoreRegistrationForm() {
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
        <form className="p-8 space-y-6">

          {/* Store Owner Name */}
          <div>
            <label className="block font-medium">Store Owner Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full p-2 border rounded-md mt-1"
            />
          </div>

          {/* Email & Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Email Address</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full p-2 border rounded-md mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">Mobile Number</label>
              <input
                type="tel"
                placeholder="10 digit number"
                className="w-full p-2 border rounded-md mt-1"
              />
            </div>
          </div>

          {/* City, State, PIN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium">City</label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full p-2 border rounded-md mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">State</label>
              <input
                type="text"
                placeholder="Enter state"
                className="w-full p-2 border rounded-md mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">PIN Code</label>
              <input
                type="text"
                placeholder="6 digit PIN"
                className="w-full p-2 border rounded-md mt-1"
              />
            </div>
          </div>

          <hr />

          {/* PAN Number */}
          <div>
            <label className="block font-medium">PAN Number</label>
            <input
              type="text"
              placeholder="Enter PAN number"
              className="w-full p-2 border rounded-md mt-1"
            />
          </div>

          {/* Aadhar Number */}
          <div>
            <label className="block font-medium">Aadhar Number</label>
            <input
              type="text"
              placeholder="12 digit Aadhar number"
              className="w-full p-2 border rounded-md mt-1"
            />
          </div>

          {/* GST Number */}
          <div>
            <label className="block font-medium">GST Number (Optional)</label>
            <input
              type="text"
              placeholder="Enter GST number if applicable"
              className="w-full p-2 border rounded-md mt-1"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-3 rounded-md font-medium hover:bg-pink-700 transition"
          >
            Register Store
          </button>
        </form>
      </div>
    </div>
  );
}
