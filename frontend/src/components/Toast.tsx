"use client";

import React, { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  duration?: number;
  onClose: () => void;
}

export default function Toast({
  message,
  type = "success",
  duration = 1000,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const alertBaseClass = "alert shadow-lg w-80";
  const alertTypeClass = type === "success" ? "alert-success" : "alert-error";
  const alertClass = `${alertBaseClass} ${alertTypeClass}`;

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={alertClass} role="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          {type === "success" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
}
