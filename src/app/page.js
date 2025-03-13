import React from "react";
import StoreForm from "./Form";
import ProfileCard from "../Components/ProfileCard";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Store Registration & Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Profile Information Card */}
        <ProfileCard />

        {/* Store Registration Form */}
        <StoreForm />
      </div>
    </div>
  );
};

export default page