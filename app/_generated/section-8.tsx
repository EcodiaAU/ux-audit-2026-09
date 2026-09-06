// Footer
import type { CSSProperties, ReactElement } from 'react';

export interface SectionTheme {
  /** Primary brand colour: buttons, links, accents. */
  primary: string;
  /** A deeper shade: deep bands, the footer, hovers. */
  primaryDark: string;
  /** A brighter accent for eyebrows and small flourishes. */
  accent: string;
  /** Readable ink for text/icons on a primary or primaryDark fill (luminance-derived, never assumed white). */
  onPrimary: string;
  /** Readable ink for text on the light surface (luminance-derived, never assumed black). */
  onSurface: string;
  /** The light page surface. */
  surface: string;
  /** A second light surface for alternating sections (vertical rhythm). */
  surfaceAlt: string;
  /** Default ink for headings + body. */
  ink: string;
  /** Muted ink for secondary text. */
  muted: string;
  /** Hairline border colour. */
  line: string;
  /** Corner radius applied to cards and buttons, e.g. "1rem". */
  radius: string;
  /** Max content width, e.g. "72rem". */
  maxWidth: string;
}

/**
 * The default theme: a calm neutral system so a single instantiated section
 * looks right with no theme passed. A composed page overrides every field.
 */
const DEFAULT_THEME: SectionTheme = {
  primary: '#1f7a5a',
  primaryDark: '#163d33',
  accent: '#1f7a5a',
  onPrimary: '#faf8f3',
  onSurface: '#1c1917',
  surface: '#faf8f3',
  surfaceAlt: '#f1ede3',
  ink: '#1c1917',
  muted: '#57534e',
  line: '#e2ddd1',
  radius: '1rem',
  maxWidth: '72rem',
};

function useTheme(t?: Partial<SectionTheme>): SectionTheme {
  return { ...DEFAULT_THEME, ...(t ?? {}) };
}

/**
 * A translucent variant of a theme ink, for muted copy / hairlines sitting on a
 * primary band. Because onPrimary is luminance-derived (not a fixed white), the
 * translucent form must be built from it at runtime rather than baked as an
 * rgba(255,255,255,...) literal - the latter is a theme leak on a light brand.
 */
export function withAlpha(color: string, a: number): string {
  const m = /^#?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/.exec(color.trim());
  if (!m) return color;
  const six = m[2] ? m[1] + m[2] : m[1].split('').map((c) => c + c).join('');
  const n = parseInt(six, 16);
  return 'rgba(' + ((n >> 16) & 255) + ', ' + ((n >> 8) & 255) + ', ' + (n & 255) + ', ' + a + ')';
}

/** Container style shared by every section: one max-width + reading rhythm. */
function container(t: SectionTheme): CSSProperties {
  return { maxWidth: t.maxWidth, marginLeft: 'auto', marginRight: 'auto' };
}

export interface FooterProps {
  orgName: string;
  tagline?: string;
  columns?: { title: string; links: { label: string; href: string }[] }[];
  legal?: string;
  theme?: Partial<SectionTheme>;
}

export default function Footer(props: FooterProps): ReactElement {
  const { orgName, tagline, columns, legal } = props;
  const t = useTheme(props.theme);
  return (
    <footer data-eos-id="app/_generated/section-8.tsx#0" data-eos-v="2" className="px-6 py-16" style={{ backgroundColor: t.primaryDark, color: withAlpha(t.onPrimary, 0.72) }}>
      <div data-eos-id="app/_generated/section-8.tsx#1" style={container(t)}>
        <div data-eos-id="app/_generated/section-8.tsx#2" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div data-eos-id="app/_generated/section-8.tsx#3" className="lg:col-span-2">
            <p data-eos-id="app/_generated/section-8.tsx#4" className="text-lg font-semibold" style={{ color: t.onPrimary }}>{orgName}</p>
            {tagline ? (
              <p data-eos-id="app/_generated/section-8.tsx#5" className="mt-2 text-sm" style={{ maxWidth: '24rem', color: withAlpha(t.onPrimary, 0.6) }}>
                {tagline}
              </p>
            ) : null}
          </div>
          {(columns ?? []).map((col) => (
            <div data-eos-id="app/_generated/section-8.tsx#6" key={col.title}>
              <p data-eos-id="app/_generated/section-8.tsx#7" data-eos-var="col.title" data-eos-var-label="Title" data-eos-var-scope="item" className="text-sm font-semibold" style={{ color: withAlpha(t.onPrimary, 0.92) }}>{col.title}</p>
              <ul data-eos-id="app/_generated/section-8.tsx#8" className="mt-3 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li data-eos-id="app/_generated/section-8.tsx#9" key={link.label}>
                    <a data-eos-href="dynamic" data-eos-href-label="Href" data-eos-href-scope="item" data-eos-id="app/_generated/section-8.tsx#10" data-eos-var="link.label" data-eos-var-label="Label" data-eos-var-scope="item" href={link.href} className="transition-colors hover:text-white" style={{ color: withAlpha(t.onPrimary, 0.6) }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {legal ? (
          <p data-eos-id="app/_generated/section-8.tsx#11" className="mt-12 pt-6 text-xs" style={{ borderTop: '1px solid ' + withAlpha(t.onPrimary, 0.16), color: withAlpha(t.onPrimary, 0.5) }}>
            {legal}
          </p>
        ) : null}
      </div>
    </footer>
  );
}
