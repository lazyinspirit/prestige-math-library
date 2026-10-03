// Embed the owner's statistical guidance in stateless physics judge contexts.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { sectionText } from './facts-block.mjs';
const MODEL = fileURLToPath(new URL('../../PHYSICS-CONTENT-MODEL.md', import.meta.url));
export function experimentalEvidenceGuidance() {
  const section = sectionText(readFileSync(MODEL, 'utf8'), 'Statistical evidence and the double-slit example').trim();
  if (!section) throw Error('missing owner statistical-evidence guidance in PHYSICS-CONTENT-MODEL.md');
  return section;
}
