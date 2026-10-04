// Embed the owner's rigor and statistical guidance in stateless physics judge contexts.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { sectionText } from './facts-block.mjs';
const MODEL = fileURLToPath(new URL('../../PHYSICS-CONTENT-MODEL.md', import.meta.url));
export function experimentalEvidenceGuidance() {
  const model = readFileSync(MODEL, 'utf8');
  return ['Concise physics agent instructions'].map(title => {
    const section = sectionText(model, title).trim();
    if (!section) throw Error(`missing owner guidance: ${title} in PHYSICS-CONTENT-MODEL.md`);
    return `## ${title}\n\n${section}`;
  }).join('\n\n');
}
