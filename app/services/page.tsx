import type { ReactElement } from 'react';
import Section1 from '../_generated/section-1';
import Section4 from '../_generated/section-4';
import Section8 from '../_generated/section-8';

export const metadata = { title: 'Services' };

export default function ServicesPage(): ReactElement {
  return (
    <main data-eos-id="app/services/page.tsx#0" data-eos-v="2">
      <Section1 data-eos-id="app/services/page.tsx#1" {...{"theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"heading":"What we offer","services":[{"title":"First service","description":"A clear description of your first service. Edit this in the studio, or brief your Friend to write it in your voice."},{"title":"Second service","description":"Another way UX Audit 2026-09 delivers. Your real content drops straight in here."},{"title":"Third service","description":"A third, so the page reads complete from day one."}],"subtitle":"A throwaway audit site for the Studio first-run walkthrough."}} />
      <Section4 data-eos-id="app/services/page.tsx#2" {...{"items":[{"answer":"A throwaway audit site for the Studio first-run walkthrough.","question":"What does UX Audit 2026-09 do?"},{"answer":"Reach out below and we will take it from there.","question":"How do I get started?"},{"answer":"This page grows as UX Audit 2026-09 does. Check back, or get in touch.","question":"Where can I learn more?"}],"theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"heading":"Questions, answered"}} />
      <Section8 data-eos-id="app/services/page.tsx#3" {...{"legal":"© UX Audit 2026-09. Built by Ecodia.","theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"columns":[{"links":[{"href":"/about","label":"About"},{"href":"/services","label":"What we offer"}],"title":"Explore"},{"links":[{"href":"/contact","label":"Contact"},{"href":"/contact","label":"Newsletter"}],"title":"Connect"}],"orgName":"UX Audit 2026-09","tagline":"A throwaway audit site for the Studio first-run walkthrough."}} />
    </main>
  );
}
