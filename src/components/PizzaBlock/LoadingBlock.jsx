import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="120" r="120" />
      <rect x="0" y="269" rx="6" ry="6" width="280" height="30" />
      <rect x="0" y="312" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="414" rx="6" ry="6" width="93" height="35" />
      <rect x="167" y="412" rx="20" ry="20" width="110" height="45" />
    </ContentLoader>
  );
}

export default LoadingBlock;
