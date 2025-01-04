import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string; // Path to the logo image
  alt: string; // Alternate text for the image
}

const Image: React.FC<ImageProps> = ({ src, alt, className = '', ...props }) => {
  return <img src={src} alt={alt} className={`w-full ${className}`} {...props} />;
};

export default Image;