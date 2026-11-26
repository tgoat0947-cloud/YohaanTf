import React from 'react';

export function ChessCrownIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.5V6M10.25 4.25H13.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M7.5 16.5L6.2 9.5C6.08 8.84 6.65 8.28 7.3 8.42L10.3 9.08C10.75 9.18 11.22 9.02 11.51 8.66L12 8.05L12.49 8.66C12.78 9.02 13.25 9.18 13.7 9.08L16.7 8.42C17.35 8.28 17.92 8.84 17.8 9.5L16.5 16.5H7.5Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 19.5H17.5M7 16.5H17L17.8 19.5H6.2L7 16.5Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.31 20.62C8.76 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM17.78 16.05C17.54 16.73 16.4 17.35 15.85 17.43C15.36 17.5 14.74 17.53 14.06 17.31C13.64 17.18 13.11 17 12.43 16.71C9.57 15.48 7.7 12.6 7.56 12.41C7.42 12.22 6.4 10.87 6.4 9.47C6.4 8.07 7.13 7.38 7.39 7.1C7.65 6.82 7.96 6.75 8.15 6.75C8.34 6.75 8.53 6.75 8.69 6.76C8.86 6.77 9.1 6.69 9.33 7.25C9.57 7.82 10.14 9.22 10.21 9.36C10.28 9.5 10.33 9.67 10.24 9.86C10.15 10.05 10.1 10.17 9.96 10.33C9.82 10.49 9.66 10.69 9.53 10.81C9.39 10.95 9.24 11.1 9.41 11.39C9.58 11.68 10.16 12.63 11.02 13.39C12.13 14.38 13.06 14.69 13.35 14.83C13.64 14.97 13.81 14.95 13.98 14.75C14.15 14.55 14.7 13.91 14.89 13.62C15.08 13.33 15.27 13.38 15.53 13.48C15.79 13.58 17.19 14.26 17.48 14.41C17.77 14.56 17.96 14.63 18.03 14.75C18.1 14.87 18.1 15.46 17.78 16.05Z" />
    </svg>
  );
}
