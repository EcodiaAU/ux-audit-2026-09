// Call to action
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

export interface CtaBandProps {
  heading: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  theme?: Partial<SectionTheme>;
}

export default function CtaBand(props: CtaBandProps): ReactElement {
  const { heading, body, ctaLabel, ctaHref } = props;
  const t = useTheme(props.theme);
  return (
    <section data-eos-id="app/_generated/section-5.tsx#0" data-eos-v="2" className="px-6 py-20 sm:py-24" style={{ backgroundColor: t.primaryDark, color: t.onPrimary }}>
      <div data-eos-id="app/_generated/section-5.tsx#1" className="text-center" style={container(t)}>
        <div data-eos-id="app/_generated/section-5.tsx#2" className="mx-auto" style={{ maxWidth: '42rem' }}>
          <h2 data-eos-id="app/_generated/section-5.tsx#3" className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
          {body ? (
            <p data-eos-id="app/_generated/section-5.tsx#4" className="mt-4 text-lg leading-8" style={{ color: withAlpha(t.onPrimary, 0.82) }}>
              {body}
            </p>
          ) : null}
          <div data-eos-id="app/_generated/section-5.tsx#5" className="mt-9">
            <a data-eos-href="dynamic" data-eos-href-label="Cta href" data-eos-href-scope="prop" data-eos-id="app/_generated/section-5.tsx#6"
              href={ctaHref}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: t.surface, color: t.primaryDark, borderRadius: t.radius }}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
