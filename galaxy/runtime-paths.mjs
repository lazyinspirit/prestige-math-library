import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Serving depends only on this checkout and the website's installed packages.
// Keep this independent of the authoring and review tools in workflow-engines.
export const REPO = process.env.PRESTIGE_MATH_REPO ?? fileURLToPath(new URL('../', import.meta.url));

const appDir = [
  process.env.PRESTIGE_APP_DIR,
  join(REPO, '..', 'prestige-intelligence'),
  '/root/Projects/prestige-intelligence',
].filter(Boolean).find(path => existsSync(path));

const packageCandidates = name => [
  appDir ? join(appDir, 'web', 'node_modules', name) : null,
  name,
].filter(Boolean);

export const katexCandidates = () => packageCandidates('katex');
export const yamlCandidates = () => packageCandidates('yaml');
