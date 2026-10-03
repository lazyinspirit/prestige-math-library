import { APP_DIR } from '../../physics-support/paths.mjs';
if (APP_DIR) process.env.PRESTIGE_APP_DIR ??= APP_DIR;
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
// Relocated helpers keep relative imports. Copy their module closure into fixtures.
export function copyFixtureFile(source: string | URL, target: string | URL, seen = new Set<string>()) {
  source = source instanceof URL ? fileURLToPath(source) : source;
  target = target instanceof URL ? fileURLToPath(target) : target;
  if (seen.has(target)) return;
  seen.add(target); mkdirSync(dirname(target), { recursive: true }); copyFileSync(source, target);
  if (!/\.(mjs|mts|ts)$/.test(source)) return;
  const text = readFileSync(source, 'utf8');
  for (const match of text.matchAll(/(?:from\s*|import\s*\()['"](\.{1,2}\/[^'"]+)['"]/g)) {
    const supplier = resolve(dirname(source), match[1]);
    const destination = resolve(dirname(target), match[1]);
    if (existsSync(supplier) && !existsSync(destination)) copyFixtureFile(supplier, destination, seen);
  }
}
import { symlinkSync, rmSync } from 'node:fs';
export const symlinkFixture: typeof symlinkSync = (source, target, type) => {
 const path = target instanceof URL ? fileURLToPath(target) : String(target);
 if (path.includes('/tools/physics-support/') && existsSync(path)) rmSync(path, { recursive: true, force: true });
 return symlinkSync(source, target, type);
};
