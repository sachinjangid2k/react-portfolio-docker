import React from 'react';

const CloudIcon = ({ color = 'currentColor', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.03825 15.0382C3.78835 13.7883 3 12.0477 3 10.1213C3 6.26843 6.26843 3 10.1213 3C13.0711 3 15.6271 4.7659 16.5955 7.29955M19 10.1213C19 13.9742 15.7316 17.2426 11.8787 17.2426H7.29955"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M15.9617 15.0382C17.2116 13.7883 18 12.0477 18 10.1213C18 6.26843 14.7316 3 10.8787 3C7.92893 3 5.37294 4.7659 4.40456 7.29955"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default CloudIcon; 