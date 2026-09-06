import type { ReactElement } from 'react';
import Section6 from '../_generated/section-6';
import Section7 from '../_generated/section-7';
import Section8 from '../_generated/section-8';

export const metadata = { title: 'Contact' };

export default function ContactPage(): ReactElement {
  return (
    <main data-eos-id="app/contact/page.tsx#0" data-eos-v="2">
      <Section6 data-eos-id="app/contact/page.tsx#1" {...{"intro":"Questions, a project, or just a hello. UX Audit 2026-09 would love to hear from you.","theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"heading":"Get in touch","submitLabel":"Send message"}} />
      <Section7 data-eos-id="app/contact/page.tsx#2" {...{"body":"An occasional note from UX Audit 2026-09. No noise, unsubscribe any time.","theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"heading":"Stay in the loop","ctaLabel":"Subscribe","placeholder":"you@example.com"}} />
      <Section8 data-eos-id="app/contact/page.tsx#3" {...{"legal":"© UX Audit 2026-09. Built by Ecodia.","theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"columns":[{"links":[{"href":"/about","label":"About"},{"href":"/services","label":"What we offer"}],"title":"Explore"},{"links":[{"href":"/contact","label":"Contact"},{"href":"/contact","label":"Newsletter"}],"title":"Connect"}],"orgName":"UX Audit 2026-09","tagline":"A throwaway audit site for the Studio first-run walkthrough."}} />
    </main>
  );
}
