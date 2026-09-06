import Script from 'next/script';
import type { ReactNode } from 'react';
import { SiteNav } from './_generated/site-nav';
import './globals.css';

export const metadata = {
  title: 'UX Audit 2026-09',
  description: 'Built with Ecodia Studio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
        <Script src="https://ecosphere.ecodia.au/preview-editor.js" strategy="afterInteractive" />
        <Script id="eco-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: "(function(){\n  try {\n    var COLLECT = \"https://ecosphere.ecodia.au/api/sites/eaee7b5b-ba2c-45e4-b821-61c4f82002b0/analytics/collect\";\n    function send(payload){\n      try {\n        var body = JSON.stringify(payload);\n        if (navigator.sendBeacon) {\n          navigator.sendBeacon(COLLECT, new Blob([body], { type: 'text/plain' }));\n        } else {\n          fetch(COLLECT, { method: 'POST', body: body, headers: { 'content-type': 'text/plain' }, keepalive: true, mode: 'no-cors' });\n        }\n      } catch (e) {}\n    }\n    function pageview(){ send({ path: location.pathname, referrer: document.referrer || '' }); }\n    window.ecoAnalytics = { track: function(name){ if (name) send({ path: location.pathname, event: String(name) }); } };\n    if (document.readyState === 'complete' || document.readyState === 'interactive') { pageview(); }\n    else { window.addEventListener('DOMContentLoaded', pageview, { once: true }); }\n  } catch (e) {}\n})();" }} />
      </body>
    </html>
  );
}
