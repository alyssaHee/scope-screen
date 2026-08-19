import { useState, useEffect } from 'react';

const allowedOrigins = new Set([
  window.location.origin,
  'https://alyssahee.vercel.app',
]);

export default function useIsParentMobile() {
  const [isParentMobile, setIsParentMobile] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (!allowedOrigins.has(event.origin)) return;

      if (event.data && event.data.type === 'device-info') {
        setIsParentMobile(Boolean(event.data.isMobile));
      }
    };

    window.addEventListener('message', handleMessage);

    if (window.parent !== window) {
      window.parent.postMessage({ type: 'request-device-info' }, '*');
    }

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return isParentMobile;
} 