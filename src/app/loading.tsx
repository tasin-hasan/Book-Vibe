import React from "react";

const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-base-100">
      {/* Loading Spinner */}
      <span className="loading loading-spinner loading-lg text-primary"></span>

      {/* Loading Text */}
      <h2 className="mt-6 text-2xl font-bold text-base-content">
        Fetching Your Books...
      </h2>

      <p className="mt-2 text-center text-base-content/60">
        Just a moment, we are gathering your favorite reads.
      </p>
    </div>
  );
};

export default GlobalLoading;
