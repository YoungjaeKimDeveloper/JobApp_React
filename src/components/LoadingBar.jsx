import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingBar = ({ isLoading }) => {
  return (
    <div className="sweet-loading">
      <ClipLoader
        color={"red"}
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingBar;
