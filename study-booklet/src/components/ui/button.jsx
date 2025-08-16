import React from "react";

export function Button({ children, className = "", variant = "default", ...props }) {
  return (
    <button
      className={`btn ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}