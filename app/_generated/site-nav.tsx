'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactElement } from 'react';

// Generated from the site's REAL routes at build time, and rewritten from the repo's
// real routes whenever a page is added. Edit a label here and it survives; the link
// set is the site's own page list.
export const SITE_PAGES: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/services', label: 'Services' },
];

export function SiteNav(): ReactElement {
  const pathname = usePathname() || '/';
  const here = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/'));
  return (
    <nav className="site-nav">
      <Link className="site-nav-brand" href="/">
        UX Audit 2026-09
      </Link>
      {SITE_PAGES.map((p) => (
        <Link key={p.href} href={p.href} aria-current={here(p.href) ? 'page' : undefined}>
          {p.label}
        </Link>
      ))}
    </nav>
  );
}

export default SiteNav;
