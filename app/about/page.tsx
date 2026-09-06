import type { ReactElement } from 'react';
import Section2 from '../_generated/section-2';
import Section3 from '../_generated/section-3';
import Section8 from '../_generated/section-8';

export const metadata = { title: 'About' };

export default function AboutPage(): ReactElement {
  return (
    <main data-eos-id="app/about/page.tsx#0" data-eos-v="2">
      <Section2 data-eos-id="app/about/page.tsx#1" {...{"quote":"\"A throwaway audit site for the Studio first-run walkthrough.\"","theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"heading":"Why we exist","paragraphs":["UX Audit 2026-09 began with a simple idea: a throwaway audit site for the Studio first-run walkthrough.","This is the start of that story. Your Friend will keep it current as the work grows, drawing on your own words and your real updates."],"attribution":"UX Audit 2026-09"}} />
      <Section3 data-eos-id="app/about/page.tsx#2" {...{"theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"quotes":[{"name":"A happy client","role":"Replace with a real quote","quote":"Working with UX Audit 2026-09 was exactly what we needed. Real, warm, and clear."},{"name":"Another voice","role":"Edit in the studio","quote":"UX Audit 2026-09 delivered, and kept us in the loop the whole way."}],"heading":"What people say"}} />
      <Section8 data-eos-id="app/about/page.tsx#3" {...{"legal":"© UX Audit 2026-09. Built by Ecodia.","theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"columns":[{"links":[{"href":"/about","label":"About"},{"href":"/services","label":"What we offer"}],"title":"Explore"},{"links":[{"href":"/contact","label":"Contact"},{"href":"/contact","label":"Newsletter"}],"title":"Connect"}],"orgName":"UX Audit 2026-09","tagline":"A throwaway audit site for the Studio first-run walkthrough."}} />
    </main>
  );
}
