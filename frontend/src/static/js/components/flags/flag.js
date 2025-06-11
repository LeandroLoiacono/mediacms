import React from 'react';

export const Flag = ({ src, loading = 'lazy', title, alt, href = '#' }) => {
  return src ? (
    <div className="flag">
      <a href={href} title={title}>
        <span>
          <img src={src} alt={alt || title} title={title} loading={loading} />
        </span>
      </a>
    </div>
  ) : null;
};
