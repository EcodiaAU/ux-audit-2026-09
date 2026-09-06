// Contact
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

export interface ContactFormProps {
  heading: string;
  intro?: string;
  submitLabel?: string;
  theme?: Partial<SectionTheme>;
}

export default function ContactForm(props: ContactFormProps): ReactElement {
  const { heading, intro, submitLabel } = props;
  const t = useTheme(props.theme);
  const field: CSSProperties = {
    border: '1px solid ' + t.line,
    borderRadius: t.radius,
    backgroundColor: t.surface,
  };
  return (
    <section data-eos-id="app/_generated/section-6.tsx#0" data-eos-v="2" className="px-6 py-20 sm:py-28" style={{ backgroundColor: t.surfaceAlt, color: t.ink }}>
      <div data-eos-id="app/_generated/section-6.tsx#1" style={container(t)}>
        <div data-eos-id="app/_generated/section-6.tsx#2" className="mx-auto" style={{ maxWidth: '36rem' }}>
        <h2 data-eos-id="app/_generated/section-6.tsx#3" className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
        {intro ? <p data-eos-id="app/_generated/section-6.tsx#4" className="mt-4 text-lg leading-8" style={{ color: t.muted }}>{intro}</p> : null}
        <form data-eos-id="app/_generated/section-6.tsx#5" className="mt-8 space-y-5">
          <div data-eos-id="app/_generated/section-6.tsx#6">
            <label data-eos-id="app/_generated/section-6.tsx#7" htmlFor="name" className="block text-sm font-medium" style={{ color: t.ink }}>Name</label>
            <input data-eos-id="app/_generated/section-6.tsx#8" id="name" name="name" type="text" className="mt-1.5 w-full px-3 py-2.5" style={field} />
          </div>
          <div data-eos-id="app/_generated/section-6.tsx#9">
            <label data-eos-id="app/_generated/section-6.tsx#10" htmlFor="email" className="block text-sm font-medium" style={{ color: t.ink }}>Email</label>
            <input data-eos-id="app/_generated/section-6.tsx#11" id="email" name="email" type="email" className="mt-1.5 w-full px-3 py-2.5" style={field} />
          </div>
          <div data-eos-id="app/_generated/section-6.tsx#12">
            <label data-eos-id="app/_generated/section-6.tsx#13" htmlFor="message" className="block text-sm font-medium" style={{ color: t.ink }}>Message</label>
            <textarea data-eos-id="app/_generated/section-6.tsx#14" id="message" name="message" rows={4} className="mt-1.5 w-full px-3 py-2.5" style={field} />
          </div>
          <button data-eos-id="app/_generated/section-6.tsx#15"
            type="submit"
            className="px-6 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: t.primary, color: t.onPrimary, borderRadius: t.radius }}
          >
            {submitLabel ?? 'Send message'}
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}
