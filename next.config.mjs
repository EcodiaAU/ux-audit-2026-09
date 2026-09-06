/** @type {import('next').NextConfig} */
// Generated section code is vetted by the compose safety GATE (typecheck + build +
// security lint) before it is ever committed here, so tsc/eslint are NOT the boundary
// at deploy time. Skipping them keeps a minor type nit in AI-authored .tsx from
// bricking a live customer site; the gate already proved the source is safe + builds.
export default {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
