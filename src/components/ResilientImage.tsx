import React, { useState } from 'react';
import { ChessCrownIcon } from './ChessIcons';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Elite Chess Coaching',
  loading = 'eager',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#161616] via-[#111111] to-[#1A0B0B] text-neutral-300 ${className}`}
      >
        <ChessCrownIcon className="w-10 h-10 text-red-600/80 mb-3" />
        <span className="font-display text-lg font-semibold tracking-tight text-white">
          {fallbackTitle}
        </span>
        <span className="text-xs text-neutral-400 mt-1">2700 Online Rated Coach</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
