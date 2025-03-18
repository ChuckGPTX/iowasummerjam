"use client";

import React from 'react';
import Image from 'next/image';

// This wrapper component ensures consistent image rendering between server and client
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
  ...rest
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Render a placeholder during SSR to avoid hydration mismatch
  if (!isClient) {
    if (fill) {
      return (
        <div
          className={className}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: '#f3f4f6'
          }}
        />
      );
    }

    return (
      <div
        className={className}
        style={{
          width: width || 'auto',
          height: height || 'auto',
          backgroundColor: '#f3f4f6'
        }}
      />
    );
  }

  // Client-side only render the real image
  return fill ? (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={className}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        {...rest}
      />
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onLoad={() => setIsLoaded(true)}
      {...rest}
    />
  );
}
